const { z, prisma, Role } = require("../utils");
const response = require("../utils/response");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/jwt");

const loginSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

const registerSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
  role: z.enum([Role.ADMIN, Role.EVALUATOR, Role.KA_HRD, Role.REKTOR]),
});

const login = async (req, res) => {
  try {
    var validatedData = loginSchema.safeParse(req.body);
    if (!validatedData.success) {
      return response.error(
        res,
        "Validation Error",
        422,
        validatedData.error.flatten()
      );
    }
    var { username, password } = validatedData.data;
    const user = await prisma.user.findFirst({ where: { username } });
    if (!user) {
      return response.error(res, "User Not Found", 404);
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return response.error(res, "Password Salah", 401);
    }
    const token = generateToken(user);
    return response.success(res, { token }, "Login Successful");
  } catch (error) {
    return response.error(res, error.message);
  }
};

const register = async (req, res) => {
  const parsed = registerSchema.safeParse(req.body);
  if (!parsed.success) {
    return response.error(res, "Validasi gagal", 422, parsed.error.flatten());
  }

  const { username, password, role } = parsed.data;

  const existing = await prisma.user.findUnique({ where: { username } });
  if (existing) {
    return response.error(res, "Email sudah digunakan", 409);
  }

  const hashed = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      username,
      role,
      password: hashed,
    },
  });

  const token = generateToken(user);
  return response.success(res, { token }, "Registrasi berhasil", 201);
};

const profile = async (req, res) => {
  const user = req.user
  return response.success(res, {user})
}

module.exports = {
  login, profile,
  register,
};
