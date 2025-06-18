
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Periode
 * 
 */
export type Periode = $Result.DefaultSelection<Prisma.$PeriodePayload>
/**
 * Model Homebase
 * 
 */
export type Homebase = $Result.DefaultSelection<Prisma.$HomebasePayload>
/**
 * Model Kriteria
 * 
 */
export type Kriteria = $Result.DefaultSelection<Prisma.$KriteriaPayload>
/**
 * Model Dosen
 * 
 */
export type Dosen = $Result.DefaultSelection<Prisma.$DosenPayload>
/**
 * Model Report
 * 
 */
export type Report = $Result.DefaultSelection<Prisma.$ReportPayload>
/**
 * Model SubKriteria
 * 
 */
export type SubKriteria = $Result.DefaultSelection<Prisma.$SubKriteriaPayload>
/**
 * Model Penilaian
 * 
 */
export type Penilaian = $Result.DefaultSelection<Prisma.$PenilaianPayload>
/**
 * Model Dokumen
 * 
 */
export type Dokumen = $Result.DefaultSelection<Prisma.$DokumenPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  EVALUATOR: 'EVALUATOR',
  KA_HRD: 'KA_HRD',
  REKTOR: 'REKTOR'
};

export type Role = (typeof Role)[keyof typeof Role]


export const JenisPenilaian: {
  BENEFIT: 'BENEFIT',
  COST: 'COST'
};

export type JenisPenilaian = (typeof JenisPenilaian)[keyof typeof JenisPenilaian]


export const Jabatan: {
  GURU_BESAR: 'GURU_BESAR',
  LEKTOR_KEPALA: 'LEKTOR_KEPALA',
  LEKTOR: 'LEKTOR',
  ASSISTEN_AHLI: 'ASSISTEN_AHLI',
  TENAGA_PENGAJAR: 'TENAGA_PENGAJAR'
};

export type Jabatan = (typeof Jabatan)[keyof typeof Jabatan]


export const ReportStatus: {
  PENDING: 'PENDING',
  REJECT_KA: 'REJECT_KA',
  REJECT_REKTOR: 'REJECT_REKTOR',
  APPROVE_KA: 'APPROVE_KA',
  APPROVE_REKTOR: 'APPROVE_REKTOR'
};

export type ReportStatus = (typeof ReportStatus)[keyof typeof ReportStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type JenisPenilaian = $Enums.JenisPenilaian

export const JenisPenilaian: typeof $Enums.JenisPenilaian

export type Jabatan = $Enums.Jabatan

export const Jabatan: typeof $Enums.Jabatan

export type ReportStatus = $Enums.ReportStatus

export const ReportStatus: typeof $Enums.ReportStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.periode`: Exposes CRUD operations for the **Periode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Periodes
    * const periodes = await prisma.periode.findMany()
    * ```
    */
  get periode(): Prisma.PeriodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.homebase`: Exposes CRUD operations for the **Homebase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Homebases
    * const homebases = await prisma.homebase.findMany()
    * ```
    */
  get homebase(): Prisma.HomebaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kriteria`: Exposes CRUD operations for the **Kriteria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kriterias
    * const kriterias = await prisma.kriteria.findMany()
    * ```
    */
  get kriteria(): Prisma.KriteriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dosen`: Exposes CRUD operations for the **Dosen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dosens
    * const dosens = await prisma.dosen.findMany()
    * ```
    */
  get dosen(): Prisma.DosenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **Report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.ReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subKriteria`: Exposes CRUD operations for the **SubKriteria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubKriterias
    * const subKriterias = await prisma.subKriteria.findMany()
    * ```
    */
  get subKriteria(): Prisma.SubKriteriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.penilaian`: Exposes CRUD operations for the **Penilaian** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Penilaians
    * const penilaians = await prisma.penilaian.findMany()
    * ```
    */
  get penilaian(): Prisma.PenilaianDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dokumen`: Exposes CRUD operations for the **Dokumen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dokumen
    * const dokumen = await prisma.dokumen.findMany()
    * ```
    */
  get dokumen(): Prisma.DokumenDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Periode: 'Periode',
    Homebase: 'Homebase',
    Kriteria: 'Kriteria',
    Dosen: 'Dosen',
    Report: 'Report',
    SubKriteria: 'SubKriteria',
    Penilaian: 'Penilaian',
    Dokumen: 'Dokumen'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "periode" | "homebase" | "kriteria" | "dosen" | "report" | "subKriteria" | "penilaian" | "dokumen"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Periode: {
        payload: Prisma.$PeriodePayload<ExtArgs>
        fields: Prisma.PeriodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PeriodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PeriodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodePayload>
          }
          findFirst: {
            args: Prisma.PeriodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PeriodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodePayload>
          }
          findMany: {
            args: Prisma.PeriodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodePayload>[]
          }
          create: {
            args: Prisma.PeriodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodePayload>
          }
          createMany: {
            args: Prisma.PeriodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PeriodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodePayload>
          }
          update: {
            args: Prisma.PeriodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodePayload>
          }
          deleteMany: {
            args: Prisma.PeriodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PeriodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PeriodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodePayload>
          }
          aggregate: {
            args: Prisma.PeriodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeriode>
          }
          groupBy: {
            args: Prisma.PeriodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<PeriodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PeriodeCountArgs<ExtArgs>
            result: $Utils.Optional<PeriodeCountAggregateOutputType> | number
          }
        }
      }
      Homebase: {
        payload: Prisma.$HomebasePayload<ExtArgs>
        fields: Prisma.HomebaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HomebaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomebasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HomebaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomebasePayload>
          }
          findFirst: {
            args: Prisma.HomebaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomebasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HomebaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomebasePayload>
          }
          findMany: {
            args: Prisma.HomebaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomebasePayload>[]
          }
          create: {
            args: Prisma.HomebaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomebasePayload>
          }
          createMany: {
            args: Prisma.HomebaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HomebaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomebasePayload>
          }
          update: {
            args: Prisma.HomebaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomebasePayload>
          }
          deleteMany: {
            args: Prisma.HomebaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HomebaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HomebaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomebasePayload>
          }
          aggregate: {
            args: Prisma.HomebaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHomebase>
          }
          groupBy: {
            args: Prisma.HomebaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<HomebaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.HomebaseCountArgs<ExtArgs>
            result: $Utils.Optional<HomebaseCountAggregateOutputType> | number
          }
        }
      }
      Kriteria: {
        payload: Prisma.$KriteriaPayload<ExtArgs>
        fields: Prisma.KriteriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KriteriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KriteriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KriteriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KriteriaPayload>
          }
          findFirst: {
            args: Prisma.KriteriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KriteriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KriteriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KriteriaPayload>
          }
          findMany: {
            args: Prisma.KriteriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KriteriaPayload>[]
          }
          create: {
            args: Prisma.KriteriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KriteriaPayload>
          }
          createMany: {
            args: Prisma.KriteriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.KriteriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KriteriaPayload>
          }
          update: {
            args: Prisma.KriteriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KriteriaPayload>
          }
          deleteMany: {
            args: Prisma.KriteriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KriteriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.KriteriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KriteriaPayload>
          }
          aggregate: {
            args: Prisma.KriteriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKriteria>
          }
          groupBy: {
            args: Prisma.KriteriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<KriteriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.KriteriaCountArgs<ExtArgs>
            result: $Utils.Optional<KriteriaCountAggregateOutputType> | number
          }
        }
      }
      Dosen: {
        payload: Prisma.$DosenPayload<ExtArgs>
        fields: Prisma.DosenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DosenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DosenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload>
          }
          findFirst: {
            args: Prisma.DosenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DosenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload>
          }
          findMany: {
            args: Prisma.DosenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload>[]
          }
          create: {
            args: Prisma.DosenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload>
          }
          createMany: {
            args: Prisma.DosenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DosenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload>
          }
          update: {
            args: Prisma.DosenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload>
          }
          deleteMany: {
            args: Prisma.DosenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DosenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DosenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload>
          }
          aggregate: {
            args: Prisma.DosenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDosen>
          }
          groupBy: {
            args: Prisma.DosenGroupByArgs<ExtArgs>
            result: $Utils.Optional<DosenGroupByOutputType>[]
          }
          count: {
            args: Prisma.DosenCountArgs<ExtArgs>
            result: $Utils.Optional<DosenCountAggregateOutputType> | number
          }
        }
      }
      Report: {
        payload: Prisma.$ReportPayload<ExtArgs>
        fields: Prisma.ReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findFirst: {
            args: Prisma.ReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findMany: {
            args: Prisma.ReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          create: {
            args: Prisma.ReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          createMany: {
            args: Prisma.ReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          update: {
            args: Prisma.ReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          deleteMany: {
            args: Prisma.ReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.ReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
          }
        }
      }
      SubKriteria: {
        payload: Prisma.$SubKriteriaPayload<ExtArgs>
        fields: Prisma.SubKriteriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubKriteriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubKriteriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubKriteriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubKriteriaPayload>
          }
          findFirst: {
            args: Prisma.SubKriteriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubKriteriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubKriteriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubKriteriaPayload>
          }
          findMany: {
            args: Prisma.SubKriteriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubKriteriaPayload>[]
          }
          create: {
            args: Prisma.SubKriteriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubKriteriaPayload>
          }
          createMany: {
            args: Prisma.SubKriteriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubKriteriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubKriteriaPayload>
          }
          update: {
            args: Prisma.SubKriteriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubKriteriaPayload>
          }
          deleteMany: {
            args: Prisma.SubKriteriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubKriteriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubKriteriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubKriteriaPayload>
          }
          aggregate: {
            args: Prisma.SubKriteriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubKriteria>
          }
          groupBy: {
            args: Prisma.SubKriteriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubKriteriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubKriteriaCountArgs<ExtArgs>
            result: $Utils.Optional<SubKriteriaCountAggregateOutputType> | number
          }
        }
      }
      Penilaian: {
        payload: Prisma.$PenilaianPayload<ExtArgs>
        fields: Prisma.PenilaianFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PenilaianFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenilaianPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PenilaianFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenilaianPayload>
          }
          findFirst: {
            args: Prisma.PenilaianFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenilaianPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PenilaianFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenilaianPayload>
          }
          findMany: {
            args: Prisma.PenilaianFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenilaianPayload>[]
          }
          create: {
            args: Prisma.PenilaianCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenilaianPayload>
          }
          createMany: {
            args: Prisma.PenilaianCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PenilaianDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenilaianPayload>
          }
          update: {
            args: Prisma.PenilaianUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenilaianPayload>
          }
          deleteMany: {
            args: Prisma.PenilaianDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PenilaianUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PenilaianUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenilaianPayload>
          }
          aggregate: {
            args: Prisma.PenilaianAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePenilaian>
          }
          groupBy: {
            args: Prisma.PenilaianGroupByArgs<ExtArgs>
            result: $Utils.Optional<PenilaianGroupByOutputType>[]
          }
          count: {
            args: Prisma.PenilaianCountArgs<ExtArgs>
            result: $Utils.Optional<PenilaianCountAggregateOutputType> | number
          }
        }
      }
      Dokumen: {
        payload: Prisma.$DokumenPayload<ExtArgs>
        fields: Prisma.DokumenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DokumenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DokumenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumenPayload>
          }
          findFirst: {
            args: Prisma.DokumenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DokumenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumenPayload>
          }
          findMany: {
            args: Prisma.DokumenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumenPayload>[]
          }
          create: {
            args: Prisma.DokumenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumenPayload>
          }
          createMany: {
            args: Prisma.DokumenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DokumenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumenPayload>
          }
          update: {
            args: Prisma.DokumenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumenPayload>
          }
          deleteMany: {
            args: Prisma.DokumenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DokumenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DokumenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumenPayload>
          }
          aggregate: {
            args: Prisma.DokumenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDokumen>
          }
          groupBy: {
            args: Prisma.DokumenGroupByArgs<ExtArgs>
            result: $Utils.Optional<DokumenGroupByOutputType>[]
          }
          count: {
            args: Prisma.DokumenCountArgs<ExtArgs>
            result: $Utils.Optional<DokumenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    periode?: PeriodeOmit
    homebase?: HomebaseOmit
    kriteria?: KriteriaOmit
    dosen?: DosenOmit
    report?: ReportOmit
    subKriteria?: SubKriteriaOmit
    penilaian?: PenilaianOmit
    dokumen?: DokumenOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Penilaian: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Penilaian?: boolean | UserCountOutputTypeCountPenilaianArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPenilaianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PenilaianWhereInput
  }


  /**
   * Count Type PeriodeCountOutputType
   */

  export type PeriodeCountOutputType = {
    Report: number
  }

  export type PeriodeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Report?: boolean | PeriodeCountOutputTypeCountReportArgs
  }

  // Custom InputTypes
  /**
   * PeriodeCountOutputType without action
   */
  export type PeriodeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriodeCountOutputType
     */
    select?: PeriodeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PeriodeCountOutputType without action
   */
  export type PeriodeCountOutputTypeCountReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }


  /**
   * Count Type HomebaseCountOutputType
   */

  export type HomebaseCountOutputType = {
    Dosen: number
  }

  export type HomebaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Dosen?: boolean | HomebaseCountOutputTypeCountDosenArgs
  }

  // Custom InputTypes
  /**
   * HomebaseCountOutputType without action
   */
  export type HomebaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomebaseCountOutputType
     */
    select?: HomebaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HomebaseCountOutputType without action
   */
  export type HomebaseCountOutputTypeCountDosenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DosenWhereInput
  }


  /**
   * Count Type KriteriaCountOutputType
   */

  export type KriteriaCountOutputType = {
    SubKriteria: number
  }

  export type KriteriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SubKriteria?: boolean | KriteriaCountOutputTypeCountSubKriteriaArgs
  }

  // Custom InputTypes
  /**
   * KriteriaCountOutputType without action
   */
  export type KriteriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KriteriaCountOutputType
     */
    select?: KriteriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KriteriaCountOutputType without action
   */
  export type KriteriaCountOutputTypeCountSubKriteriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubKriteriaWhereInput
  }


  /**
   * Count Type DosenCountOutputType
   */

  export type DosenCountOutputType = {
    Report: number
    Dokumen: number
  }

  export type DosenCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Report?: boolean | DosenCountOutputTypeCountReportArgs
    Dokumen?: boolean | DosenCountOutputTypeCountDokumenArgs
  }

  // Custom InputTypes
  /**
   * DosenCountOutputType without action
   */
  export type DosenCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DosenCountOutputType
     */
    select?: DosenCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DosenCountOutputType without action
   */
  export type DosenCountOutputTypeCountReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }

  /**
   * DosenCountOutputType without action
   */
  export type DosenCountOutputTypeCountDokumenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DokumenWhereInput
  }


  /**
   * Count Type ReportCountOutputType
   */

  export type ReportCountOutputType = {
    Penilaian: number
  }

  export type ReportCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Penilaian?: boolean | ReportCountOutputTypeCountPenilaianArgs
  }

  // Custom InputTypes
  /**
   * ReportCountOutputType without action
   */
  export type ReportCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportCountOutputType
     */
    select?: ReportCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReportCountOutputType without action
   */
  export type ReportCountOutputTypeCountPenilaianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PenilaianWhereInput
  }


  /**
   * Count Type SubKriteriaCountOutputType
   */

  export type SubKriteriaCountOutputType = {
    Penilaian: number
  }

  export type SubKriteriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Penilaian?: boolean | SubKriteriaCountOutputTypeCountPenilaianArgs
  }

  // Custom InputTypes
  /**
   * SubKriteriaCountOutputType without action
   */
  export type SubKriteriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubKriteriaCountOutputType
     */
    select?: SubKriteriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubKriteriaCountOutputType without action
   */
  export type SubKriteriaCountOutputTypeCountPenilaianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PenilaianWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Penilaian?: boolean | User$PenilaianArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Penilaian?: boolean | User$PenilaianArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Penilaian: Prisma.$PenilaianPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Penilaian<T extends User$PenilaianArgs<ExtArgs> = {}>(args?: Subset<T, User$PenilaianArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenilaianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Penilaian
   */
  export type User$PenilaianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penilaian
     */
    select?: PenilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penilaian
     */
    omit?: PenilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenilaianInclude<ExtArgs> | null
    where?: PenilaianWhereInput
    orderBy?: PenilaianOrderByWithRelationInput | PenilaianOrderByWithRelationInput[]
    cursor?: PenilaianWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PenilaianScalarFieldEnum | PenilaianScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Periode
   */

  export type AggregatePeriode = {
    _count: PeriodeCountAggregateOutputType | null
    _avg: PeriodeAvgAggregateOutputType | null
    _sum: PeriodeSumAggregateOutputType | null
    _min: PeriodeMinAggregateOutputType | null
    _max: PeriodeMaxAggregateOutputType | null
  }

  export type PeriodeAvgAggregateOutputType = {
    id: number | null
  }

  export type PeriodeSumAggregateOutputType = {
    id: number | null
  }

  export type PeriodeMinAggregateOutputType = {
    id: number | null
    periode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PeriodeMaxAggregateOutputType = {
    id: number | null
    periode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PeriodeCountAggregateOutputType = {
    id: number
    periode: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PeriodeAvgAggregateInputType = {
    id?: true
  }

  export type PeriodeSumAggregateInputType = {
    id?: true
  }

  export type PeriodeMinAggregateInputType = {
    id?: true
    periode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PeriodeMaxAggregateInputType = {
    id?: true
    periode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PeriodeCountAggregateInputType = {
    id?: true
    periode?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PeriodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Periode to aggregate.
     */
    where?: PeriodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Periodes to fetch.
     */
    orderBy?: PeriodeOrderByWithRelationInput | PeriodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PeriodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Periodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Periodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Periodes
    **/
    _count?: true | PeriodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PeriodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PeriodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PeriodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PeriodeMaxAggregateInputType
  }

  export type GetPeriodeAggregateType<T extends PeriodeAggregateArgs> = {
        [P in keyof T & keyof AggregatePeriode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeriode[P]>
      : GetScalarType<T[P], AggregatePeriode[P]>
  }




  export type PeriodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeriodeWhereInput
    orderBy?: PeriodeOrderByWithAggregationInput | PeriodeOrderByWithAggregationInput[]
    by: PeriodeScalarFieldEnum[] | PeriodeScalarFieldEnum
    having?: PeriodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PeriodeCountAggregateInputType | true
    _avg?: PeriodeAvgAggregateInputType
    _sum?: PeriodeSumAggregateInputType
    _min?: PeriodeMinAggregateInputType
    _max?: PeriodeMaxAggregateInputType
  }

  export type PeriodeGroupByOutputType = {
    id: number
    periode: string
    createdAt: Date
    updatedAt: Date
    _count: PeriodeCountAggregateOutputType | null
    _avg: PeriodeAvgAggregateOutputType | null
    _sum: PeriodeSumAggregateOutputType | null
    _min: PeriodeMinAggregateOutputType | null
    _max: PeriodeMaxAggregateOutputType | null
  }

  type GetPeriodeGroupByPayload<T extends PeriodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PeriodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PeriodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PeriodeGroupByOutputType[P]>
            : GetScalarType<T[P], PeriodeGroupByOutputType[P]>
        }
      >
    >


  export type PeriodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    periode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Report?: boolean | Periode$ReportArgs<ExtArgs>
    _count?: boolean | PeriodeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["periode"]>



  export type PeriodeSelectScalar = {
    id?: boolean
    periode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PeriodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "periode" | "createdAt" | "updatedAt", ExtArgs["result"]["periode"]>
  export type PeriodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Report?: boolean | Periode$ReportArgs<ExtArgs>
    _count?: boolean | PeriodeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PeriodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Periode"
    objects: {
      Report: Prisma.$ReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      periode: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["periode"]>
    composites: {}
  }

  type PeriodeGetPayload<S extends boolean | null | undefined | PeriodeDefaultArgs> = $Result.GetResult<Prisma.$PeriodePayload, S>

  type PeriodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PeriodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PeriodeCountAggregateInputType | true
    }

  export interface PeriodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Periode'], meta: { name: 'Periode' } }
    /**
     * Find zero or one Periode that matches the filter.
     * @param {PeriodeFindUniqueArgs} args - Arguments to find a Periode
     * @example
     * // Get one Periode
     * const periode = await prisma.periode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PeriodeFindUniqueArgs>(args: SelectSubset<T, PeriodeFindUniqueArgs<ExtArgs>>): Prisma__PeriodeClient<$Result.GetResult<Prisma.$PeriodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Periode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PeriodeFindUniqueOrThrowArgs} args - Arguments to find a Periode
     * @example
     * // Get one Periode
     * const periode = await prisma.periode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PeriodeFindUniqueOrThrowArgs>(args: SelectSubset<T, PeriodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PeriodeClient<$Result.GetResult<Prisma.$PeriodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Periode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodeFindFirstArgs} args - Arguments to find a Periode
     * @example
     * // Get one Periode
     * const periode = await prisma.periode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PeriodeFindFirstArgs>(args?: SelectSubset<T, PeriodeFindFirstArgs<ExtArgs>>): Prisma__PeriodeClient<$Result.GetResult<Prisma.$PeriodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Periode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodeFindFirstOrThrowArgs} args - Arguments to find a Periode
     * @example
     * // Get one Periode
     * const periode = await prisma.periode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PeriodeFindFirstOrThrowArgs>(args?: SelectSubset<T, PeriodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PeriodeClient<$Result.GetResult<Prisma.$PeriodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Periodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Periodes
     * const periodes = await prisma.periode.findMany()
     * 
     * // Get first 10 Periodes
     * const periodes = await prisma.periode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const periodeWithIdOnly = await prisma.periode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PeriodeFindManyArgs>(args?: SelectSubset<T, PeriodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeriodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Periode.
     * @param {PeriodeCreateArgs} args - Arguments to create a Periode.
     * @example
     * // Create one Periode
     * const Periode = await prisma.periode.create({
     *   data: {
     *     // ... data to create a Periode
     *   }
     * })
     * 
     */
    create<T extends PeriodeCreateArgs>(args: SelectSubset<T, PeriodeCreateArgs<ExtArgs>>): Prisma__PeriodeClient<$Result.GetResult<Prisma.$PeriodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Periodes.
     * @param {PeriodeCreateManyArgs} args - Arguments to create many Periodes.
     * @example
     * // Create many Periodes
     * const periode = await prisma.periode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PeriodeCreateManyArgs>(args?: SelectSubset<T, PeriodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Periode.
     * @param {PeriodeDeleteArgs} args - Arguments to delete one Periode.
     * @example
     * // Delete one Periode
     * const Periode = await prisma.periode.delete({
     *   where: {
     *     // ... filter to delete one Periode
     *   }
     * })
     * 
     */
    delete<T extends PeriodeDeleteArgs>(args: SelectSubset<T, PeriodeDeleteArgs<ExtArgs>>): Prisma__PeriodeClient<$Result.GetResult<Prisma.$PeriodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Periode.
     * @param {PeriodeUpdateArgs} args - Arguments to update one Periode.
     * @example
     * // Update one Periode
     * const periode = await prisma.periode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PeriodeUpdateArgs>(args: SelectSubset<T, PeriodeUpdateArgs<ExtArgs>>): Prisma__PeriodeClient<$Result.GetResult<Prisma.$PeriodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Periodes.
     * @param {PeriodeDeleteManyArgs} args - Arguments to filter Periodes to delete.
     * @example
     * // Delete a few Periodes
     * const { count } = await prisma.periode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PeriodeDeleteManyArgs>(args?: SelectSubset<T, PeriodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Periodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Periodes
     * const periode = await prisma.periode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PeriodeUpdateManyArgs>(args: SelectSubset<T, PeriodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Periode.
     * @param {PeriodeUpsertArgs} args - Arguments to update or create a Periode.
     * @example
     * // Update or create a Periode
     * const periode = await prisma.periode.upsert({
     *   create: {
     *     // ... data to create a Periode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Periode we want to update
     *   }
     * })
     */
    upsert<T extends PeriodeUpsertArgs>(args: SelectSubset<T, PeriodeUpsertArgs<ExtArgs>>): Prisma__PeriodeClient<$Result.GetResult<Prisma.$PeriodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Periodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodeCountArgs} args - Arguments to filter Periodes to count.
     * @example
     * // Count the number of Periodes
     * const count = await prisma.periode.count({
     *   where: {
     *     // ... the filter for the Periodes we want to count
     *   }
     * })
    **/
    count<T extends PeriodeCountArgs>(
      args?: Subset<T, PeriodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeriodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Periode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PeriodeAggregateArgs>(args: Subset<T, PeriodeAggregateArgs>): Prisma.PrismaPromise<GetPeriodeAggregateType<T>>

    /**
     * Group by Periode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PeriodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PeriodeGroupByArgs['orderBy'] }
        : { orderBy?: PeriodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PeriodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeriodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Periode model
   */
  readonly fields: PeriodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Periode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PeriodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Report<T extends Periode$ReportArgs<ExtArgs> = {}>(args?: Subset<T, Periode$ReportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Periode model
   */
  interface PeriodeFieldRefs {
    readonly id: FieldRef<"Periode", 'Int'>
    readonly periode: FieldRef<"Periode", 'String'>
    readonly createdAt: FieldRef<"Periode", 'DateTime'>
    readonly updatedAt: FieldRef<"Periode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Periode findUnique
   */
  export type PeriodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periode
     */
    select?: PeriodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periode
     */
    omit?: PeriodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodeInclude<ExtArgs> | null
    /**
     * Filter, which Periode to fetch.
     */
    where: PeriodeWhereUniqueInput
  }

  /**
   * Periode findUniqueOrThrow
   */
  export type PeriodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periode
     */
    select?: PeriodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periode
     */
    omit?: PeriodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodeInclude<ExtArgs> | null
    /**
     * Filter, which Periode to fetch.
     */
    where: PeriodeWhereUniqueInput
  }

  /**
   * Periode findFirst
   */
  export type PeriodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periode
     */
    select?: PeriodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periode
     */
    omit?: PeriodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodeInclude<ExtArgs> | null
    /**
     * Filter, which Periode to fetch.
     */
    where?: PeriodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Periodes to fetch.
     */
    orderBy?: PeriodeOrderByWithRelationInput | PeriodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Periodes.
     */
    cursor?: PeriodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Periodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Periodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Periodes.
     */
    distinct?: PeriodeScalarFieldEnum | PeriodeScalarFieldEnum[]
  }

  /**
   * Periode findFirstOrThrow
   */
  export type PeriodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periode
     */
    select?: PeriodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periode
     */
    omit?: PeriodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodeInclude<ExtArgs> | null
    /**
     * Filter, which Periode to fetch.
     */
    where?: PeriodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Periodes to fetch.
     */
    orderBy?: PeriodeOrderByWithRelationInput | PeriodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Periodes.
     */
    cursor?: PeriodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Periodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Periodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Periodes.
     */
    distinct?: PeriodeScalarFieldEnum | PeriodeScalarFieldEnum[]
  }

  /**
   * Periode findMany
   */
  export type PeriodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periode
     */
    select?: PeriodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periode
     */
    omit?: PeriodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodeInclude<ExtArgs> | null
    /**
     * Filter, which Periodes to fetch.
     */
    where?: PeriodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Periodes to fetch.
     */
    orderBy?: PeriodeOrderByWithRelationInput | PeriodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Periodes.
     */
    cursor?: PeriodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Periodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Periodes.
     */
    skip?: number
    distinct?: PeriodeScalarFieldEnum | PeriodeScalarFieldEnum[]
  }

  /**
   * Periode create
   */
  export type PeriodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periode
     */
    select?: PeriodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periode
     */
    omit?: PeriodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodeInclude<ExtArgs> | null
    /**
     * The data needed to create a Periode.
     */
    data: XOR<PeriodeCreateInput, PeriodeUncheckedCreateInput>
  }

  /**
   * Periode createMany
   */
  export type PeriodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Periodes.
     */
    data: PeriodeCreateManyInput | PeriodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Periode update
   */
  export type PeriodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periode
     */
    select?: PeriodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periode
     */
    omit?: PeriodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodeInclude<ExtArgs> | null
    /**
     * The data needed to update a Periode.
     */
    data: XOR<PeriodeUpdateInput, PeriodeUncheckedUpdateInput>
    /**
     * Choose, which Periode to update.
     */
    where: PeriodeWhereUniqueInput
  }

  /**
   * Periode updateMany
   */
  export type PeriodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Periodes.
     */
    data: XOR<PeriodeUpdateManyMutationInput, PeriodeUncheckedUpdateManyInput>
    /**
     * Filter which Periodes to update
     */
    where?: PeriodeWhereInput
    /**
     * Limit how many Periodes to update.
     */
    limit?: number
  }

  /**
   * Periode upsert
   */
  export type PeriodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periode
     */
    select?: PeriodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periode
     */
    omit?: PeriodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodeInclude<ExtArgs> | null
    /**
     * The filter to search for the Periode to update in case it exists.
     */
    where: PeriodeWhereUniqueInput
    /**
     * In case the Periode found by the `where` argument doesn't exist, create a new Periode with this data.
     */
    create: XOR<PeriodeCreateInput, PeriodeUncheckedCreateInput>
    /**
     * In case the Periode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PeriodeUpdateInput, PeriodeUncheckedUpdateInput>
  }

  /**
   * Periode delete
   */
  export type PeriodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periode
     */
    select?: PeriodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periode
     */
    omit?: PeriodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodeInclude<ExtArgs> | null
    /**
     * Filter which Periode to delete.
     */
    where: PeriodeWhereUniqueInput
  }

  /**
   * Periode deleteMany
   */
  export type PeriodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Periodes to delete
     */
    where?: PeriodeWhereInput
    /**
     * Limit how many Periodes to delete.
     */
    limit?: number
  }

  /**
   * Periode.Report
   */
  export type Periode$ReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Periode without action
   */
  export type PeriodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periode
     */
    select?: PeriodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Periode
     */
    omit?: PeriodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodeInclude<ExtArgs> | null
  }


  /**
   * Model Homebase
   */

  export type AggregateHomebase = {
    _count: HomebaseCountAggregateOutputType | null
    _avg: HomebaseAvgAggregateOutputType | null
    _sum: HomebaseSumAggregateOutputType | null
    _min: HomebaseMinAggregateOutputType | null
    _max: HomebaseMaxAggregateOutputType | null
  }

  export type HomebaseAvgAggregateOutputType = {
    id: number | null
  }

  export type HomebaseSumAggregateOutputType = {
    id: number | null
  }

  export type HomebaseMinAggregateOutputType = {
    id: number | null
    nama: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HomebaseMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HomebaseCountAggregateOutputType = {
    id: number
    nama: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HomebaseAvgAggregateInputType = {
    id?: true
  }

  export type HomebaseSumAggregateInputType = {
    id?: true
  }

  export type HomebaseMinAggregateInputType = {
    id?: true
    nama?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HomebaseMaxAggregateInputType = {
    id?: true
    nama?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HomebaseCountAggregateInputType = {
    id?: true
    nama?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HomebaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Homebase to aggregate.
     */
    where?: HomebaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Homebases to fetch.
     */
    orderBy?: HomebaseOrderByWithRelationInput | HomebaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HomebaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Homebases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Homebases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Homebases
    **/
    _count?: true | HomebaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HomebaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HomebaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HomebaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HomebaseMaxAggregateInputType
  }

  export type GetHomebaseAggregateType<T extends HomebaseAggregateArgs> = {
        [P in keyof T & keyof AggregateHomebase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHomebase[P]>
      : GetScalarType<T[P], AggregateHomebase[P]>
  }




  export type HomebaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HomebaseWhereInput
    orderBy?: HomebaseOrderByWithAggregationInput | HomebaseOrderByWithAggregationInput[]
    by: HomebaseScalarFieldEnum[] | HomebaseScalarFieldEnum
    having?: HomebaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HomebaseCountAggregateInputType | true
    _avg?: HomebaseAvgAggregateInputType
    _sum?: HomebaseSumAggregateInputType
    _min?: HomebaseMinAggregateInputType
    _max?: HomebaseMaxAggregateInputType
  }

  export type HomebaseGroupByOutputType = {
    id: number
    nama: string
    createdAt: Date
    updatedAt: Date
    _count: HomebaseCountAggregateOutputType | null
    _avg: HomebaseAvgAggregateOutputType | null
    _sum: HomebaseSumAggregateOutputType | null
    _min: HomebaseMinAggregateOutputType | null
    _max: HomebaseMaxAggregateOutputType | null
  }

  type GetHomebaseGroupByPayload<T extends HomebaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HomebaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HomebaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HomebaseGroupByOutputType[P]>
            : GetScalarType<T[P], HomebaseGroupByOutputType[P]>
        }
      >
    >


  export type HomebaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Dosen?: boolean | Homebase$DosenArgs<ExtArgs>
    _count?: boolean | HomebaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["homebase"]>



  export type HomebaseSelectScalar = {
    id?: boolean
    nama?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HomebaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "createdAt" | "updatedAt", ExtArgs["result"]["homebase"]>
  export type HomebaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Dosen?: boolean | Homebase$DosenArgs<ExtArgs>
    _count?: boolean | HomebaseCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $HomebasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Homebase"
    objects: {
      Dosen: Prisma.$DosenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["homebase"]>
    composites: {}
  }

  type HomebaseGetPayload<S extends boolean | null | undefined | HomebaseDefaultArgs> = $Result.GetResult<Prisma.$HomebasePayload, S>

  type HomebaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HomebaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HomebaseCountAggregateInputType | true
    }

  export interface HomebaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Homebase'], meta: { name: 'Homebase' } }
    /**
     * Find zero or one Homebase that matches the filter.
     * @param {HomebaseFindUniqueArgs} args - Arguments to find a Homebase
     * @example
     * // Get one Homebase
     * const homebase = await prisma.homebase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HomebaseFindUniqueArgs>(args: SelectSubset<T, HomebaseFindUniqueArgs<ExtArgs>>): Prisma__HomebaseClient<$Result.GetResult<Prisma.$HomebasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Homebase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HomebaseFindUniqueOrThrowArgs} args - Arguments to find a Homebase
     * @example
     * // Get one Homebase
     * const homebase = await prisma.homebase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HomebaseFindUniqueOrThrowArgs>(args: SelectSubset<T, HomebaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HomebaseClient<$Result.GetResult<Prisma.$HomebasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Homebase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomebaseFindFirstArgs} args - Arguments to find a Homebase
     * @example
     * // Get one Homebase
     * const homebase = await prisma.homebase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HomebaseFindFirstArgs>(args?: SelectSubset<T, HomebaseFindFirstArgs<ExtArgs>>): Prisma__HomebaseClient<$Result.GetResult<Prisma.$HomebasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Homebase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomebaseFindFirstOrThrowArgs} args - Arguments to find a Homebase
     * @example
     * // Get one Homebase
     * const homebase = await prisma.homebase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HomebaseFindFirstOrThrowArgs>(args?: SelectSubset<T, HomebaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__HomebaseClient<$Result.GetResult<Prisma.$HomebasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Homebases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomebaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Homebases
     * const homebases = await prisma.homebase.findMany()
     * 
     * // Get first 10 Homebases
     * const homebases = await prisma.homebase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const homebaseWithIdOnly = await prisma.homebase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HomebaseFindManyArgs>(args?: SelectSubset<T, HomebaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomebasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Homebase.
     * @param {HomebaseCreateArgs} args - Arguments to create a Homebase.
     * @example
     * // Create one Homebase
     * const Homebase = await prisma.homebase.create({
     *   data: {
     *     // ... data to create a Homebase
     *   }
     * })
     * 
     */
    create<T extends HomebaseCreateArgs>(args: SelectSubset<T, HomebaseCreateArgs<ExtArgs>>): Prisma__HomebaseClient<$Result.GetResult<Prisma.$HomebasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Homebases.
     * @param {HomebaseCreateManyArgs} args - Arguments to create many Homebases.
     * @example
     * // Create many Homebases
     * const homebase = await prisma.homebase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HomebaseCreateManyArgs>(args?: SelectSubset<T, HomebaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Homebase.
     * @param {HomebaseDeleteArgs} args - Arguments to delete one Homebase.
     * @example
     * // Delete one Homebase
     * const Homebase = await prisma.homebase.delete({
     *   where: {
     *     // ... filter to delete one Homebase
     *   }
     * })
     * 
     */
    delete<T extends HomebaseDeleteArgs>(args: SelectSubset<T, HomebaseDeleteArgs<ExtArgs>>): Prisma__HomebaseClient<$Result.GetResult<Prisma.$HomebasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Homebase.
     * @param {HomebaseUpdateArgs} args - Arguments to update one Homebase.
     * @example
     * // Update one Homebase
     * const homebase = await prisma.homebase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HomebaseUpdateArgs>(args: SelectSubset<T, HomebaseUpdateArgs<ExtArgs>>): Prisma__HomebaseClient<$Result.GetResult<Prisma.$HomebasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Homebases.
     * @param {HomebaseDeleteManyArgs} args - Arguments to filter Homebases to delete.
     * @example
     * // Delete a few Homebases
     * const { count } = await prisma.homebase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HomebaseDeleteManyArgs>(args?: SelectSubset<T, HomebaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Homebases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomebaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Homebases
     * const homebase = await prisma.homebase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HomebaseUpdateManyArgs>(args: SelectSubset<T, HomebaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Homebase.
     * @param {HomebaseUpsertArgs} args - Arguments to update or create a Homebase.
     * @example
     * // Update or create a Homebase
     * const homebase = await prisma.homebase.upsert({
     *   create: {
     *     // ... data to create a Homebase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Homebase we want to update
     *   }
     * })
     */
    upsert<T extends HomebaseUpsertArgs>(args: SelectSubset<T, HomebaseUpsertArgs<ExtArgs>>): Prisma__HomebaseClient<$Result.GetResult<Prisma.$HomebasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Homebases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomebaseCountArgs} args - Arguments to filter Homebases to count.
     * @example
     * // Count the number of Homebases
     * const count = await prisma.homebase.count({
     *   where: {
     *     // ... the filter for the Homebases we want to count
     *   }
     * })
    **/
    count<T extends HomebaseCountArgs>(
      args?: Subset<T, HomebaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HomebaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Homebase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomebaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HomebaseAggregateArgs>(args: Subset<T, HomebaseAggregateArgs>): Prisma.PrismaPromise<GetHomebaseAggregateType<T>>

    /**
     * Group by Homebase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomebaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HomebaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HomebaseGroupByArgs['orderBy'] }
        : { orderBy?: HomebaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HomebaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHomebaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Homebase model
   */
  readonly fields: HomebaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Homebase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HomebaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Dosen<T extends Homebase$DosenArgs<ExtArgs> = {}>(args?: Subset<T, Homebase$DosenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Homebase model
   */
  interface HomebaseFieldRefs {
    readonly id: FieldRef<"Homebase", 'Int'>
    readonly nama: FieldRef<"Homebase", 'String'>
    readonly createdAt: FieldRef<"Homebase", 'DateTime'>
    readonly updatedAt: FieldRef<"Homebase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Homebase findUnique
   */
  export type HomebaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homebase
     */
    select?: HomebaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homebase
     */
    omit?: HomebaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomebaseInclude<ExtArgs> | null
    /**
     * Filter, which Homebase to fetch.
     */
    where: HomebaseWhereUniqueInput
  }

  /**
   * Homebase findUniqueOrThrow
   */
  export type HomebaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homebase
     */
    select?: HomebaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homebase
     */
    omit?: HomebaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomebaseInclude<ExtArgs> | null
    /**
     * Filter, which Homebase to fetch.
     */
    where: HomebaseWhereUniqueInput
  }

  /**
   * Homebase findFirst
   */
  export type HomebaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homebase
     */
    select?: HomebaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homebase
     */
    omit?: HomebaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomebaseInclude<ExtArgs> | null
    /**
     * Filter, which Homebase to fetch.
     */
    where?: HomebaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Homebases to fetch.
     */
    orderBy?: HomebaseOrderByWithRelationInput | HomebaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Homebases.
     */
    cursor?: HomebaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Homebases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Homebases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Homebases.
     */
    distinct?: HomebaseScalarFieldEnum | HomebaseScalarFieldEnum[]
  }

  /**
   * Homebase findFirstOrThrow
   */
  export type HomebaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homebase
     */
    select?: HomebaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homebase
     */
    omit?: HomebaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomebaseInclude<ExtArgs> | null
    /**
     * Filter, which Homebase to fetch.
     */
    where?: HomebaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Homebases to fetch.
     */
    orderBy?: HomebaseOrderByWithRelationInput | HomebaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Homebases.
     */
    cursor?: HomebaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Homebases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Homebases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Homebases.
     */
    distinct?: HomebaseScalarFieldEnum | HomebaseScalarFieldEnum[]
  }

  /**
   * Homebase findMany
   */
  export type HomebaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homebase
     */
    select?: HomebaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homebase
     */
    omit?: HomebaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomebaseInclude<ExtArgs> | null
    /**
     * Filter, which Homebases to fetch.
     */
    where?: HomebaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Homebases to fetch.
     */
    orderBy?: HomebaseOrderByWithRelationInput | HomebaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Homebases.
     */
    cursor?: HomebaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Homebases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Homebases.
     */
    skip?: number
    distinct?: HomebaseScalarFieldEnum | HomebaseScalarFieldEnum[]
  }

  /**
   * Homebase create
   */
  export type HomebaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homebase
     */
    select?: HomebaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homebase
     */
    omit?: HomebaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomebaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Homebase.
     */
    data: XOR<HomebaseCreateInput, HomebaseUncheckedCreateInput>
  }

  /**
   * Homebase createMany
   */
  export type HomebaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Homebases.
     */
    data: HomebaseCreateManyInput | HomebaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Homebase update
   */
  export type HomebaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homebase
     */
    select?: HomebaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homebase
     */
    omit?: HomebaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomebaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Homebase.
     */
    data: XOR<HomebaseUpdateInput, HomebaseUncheckedUpdateInput>
    /**
     * Choose, which Homebase to update.
     */
    where: HomebaseWhereUniqueInput
  }

  /**
   * Homebase updateMany
   */
  export type HomebaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Homebases.
     */
    data: XOR<HomebaseUpdateManyMutationInput, HomebaseUncheckedUpdateManyInput>
    /**
     * Filter which Homebases to update
     */
    where?: HomebaseWhereInput
    /**
     * Limit how many Homebases to update.
     */
    limit?: number
  }

  /**
   * Homebase upsert
   */
  export type HomebaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homebase
     */
    select?: HomebaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homebase
     */
    omit?: HomebaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomebaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Homebase to update in case it exists.
     */
    where: HomebaseWhereUniqueInput
    /**
     * In case the Homebase found by the `where` argument doesn't exist, create a new Homebase with this data.
     */
    create: XOR<HomebaseCreateInput, HomebaseUncheckedCreateInput>
    /**
     * In case the Homebase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HomebaseUpdateInput, HomebaseUncheckedUpdateInput>
  }

  /**
   * Homebase delete
   */
  export type HomebaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homebase
     */
    select?: HomebaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homebase
     */
    omit?: HomebaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomebaseInclude<ExtArgs> | null
    /**
     * Filter which Homebase to delete.
     */
    where: HomebaseWhereUniqueInput
  }

  /**
   * Homebase deleteMany
   */
  export type HomebaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Homebases to delete
     */
    where?: HomebaseWhereInput
    /**
     * Limit how many Homebases to delete.
     */
    limit?: number
  }

  /**
   * Homebase.Dosen
   */
  export type Homebase$DosenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    where?: DosenWhereInput
    orderBy?: DosenOrderByWithRelationInput | DosenOrderByWithRelationInput[]
    cursor?: DosenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DosenScalarFieldEnum | DosenScalarFieldEnum[]
  }

  /**
   * Homebase without action
   */
  export type HomebaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homebase
     */
    select?: HomebaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homebase
     */
    omit?: HomebaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomebaseInclude<ExtArgs> | null
  }


  /**
   * Model Kriteria
   */

  export type AggregateKriteria = {
    _count: KriteriaCountAggregateOutputType | null
    _avg: KriteriaAvgAggregateOutputType | null
    _sum: KriteriaSumAggregateOutputType | null
    _min: KriteriaMinAggregateOutputType | null
    _max: KriteriaMaxAggregateOutputType | null
  }

  export type KriteriaAvgAggregateOutputType = {
    id: number | null
    bobot: number | null
  }

  export type KriteriaSumAggregateOutputType = {
    id: number | null
    bobot: number | null
  }

  export type KriteriaMinAggregateOutputType = {
    id: number | null
    nama: string | null
    bobot: number | null
    deskripsi: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KriteriaMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    bobot: number | null
    deskripsi: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KriteriaCountAggregateOutputType = {
    id: number
    nama: number
    bobot: number
    deskripsi: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type KriteriaAvgAggregateInputType = {
    id?: true
    bobot?: true
  }

  export type KriteriaSumAggregateInputType = {
    id?: true
    bobot?: true
  }

  export type KriteriaMinAggregateInputType = {
    id?: true
    nama?: true
    bobot?: true
    deskripsi?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KriteriaMaxAggregateInputType = {
    id?: true
    nama?: true
    bobot?: true
    deskripsi?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KriteriaCountAggregateInputType = {
    id?: true
    nama?: true
    bobot?: true
    deskripsi?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type KriteriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kriteria to aggregate.
     */
    where?: KriteriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kriterias to fetch.
     */
    orderBy?: KriteriaOrderByWithRelationInput | KriteriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KriteriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kriterias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kriterias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kriterias
    **/
    _count?: true | KriteriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KriteriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KriteriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KriteriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KriteriaMaxAggregateInputType
  }

  export type GetKriteriaAggregateType<T extends KriteriaAggregateArgs> = {
        [P in keyof T & keyof AggregateKriteria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKriteria[P]>
      : GetScalarType<T[P], AggregateKriteria[P]>
  }




  export type KriteriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KriteriaWhereInput
    orderBy?: KriteriaOrderByWithAggregationInput | KriteriaOrderByWithAggregationInput[]
    by: KriteriaScalarFieldEnum[] | KriteriaScalarFieldEnum
    having?: KriteriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KriteriaCountAggregateInputType | true
    _avg?: KriteriaAvgAggregateInputType
    _sum?: KriteriaSumAggregateInputType
    _min?: KriteriaMinAggregateInputType
    _max?: KriteriaMaxAggregateInputType
  }

  export type KriteriaGroupByOutputType = {
    id: number
    nama: string
    bobot: number
    deskripsi: string
    createdAt: Date
    updatedAt: Date
    _count: KriteriaCountAggregateOutputType | null
    _avg: KriteriaAvgAggregateOutputType | null
    _sum: KriteriaSumAggregateOutputType | null
    _min: KriteriaMinAggregateOutputType | null
    _max: KriteriaMaxAggregateOutputType | null
  }

  type GetKriteriaGroupByPayload<T extends KriteriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KriteriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KriteriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KriteriaGroupByOutputType[P]>
            : GetScalarType<T[P], KriteriaGroupByOutputType[P]>
        }
      >
    >


  export type KriteriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    bobot?: boolean
    deskripsi?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    SubKriteria?: boolean | Kriteria$SubKriteriaArgs<ExtArgs>
    _count?: boolean | KriteriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kriteria"]>



  export type KriteriaSelectScalar = {
    id?: boolean
    nama?: boolean
    bobot?: boolean
    deskripsi?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type KriteriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "bobot" | "deskripsi" | "createdAt" | "updatedAt", ExtArgs["result"]["kriteria"]>
  export type KriteriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SubKriteria?: boolean | Kriteria$SubKriteriaArgs<ExtArgs>
    _count?: boolean | KriteriaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $KriteriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kriteria"
    objects: {
      SubKriteria: Prisma.$SubKriteriaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      bobot: number
      deskripsi: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["kriteria"]>
    composites: {}
  }

  type KriteriaGetPayload<S extends boolean | null | undefined | KriteriaDefaultArgs> = $Result.GetResult<Prisma.$KriteriaPayload, S>

  type KriteriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KriteriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KriteriaCountAggregateInputType | true
    }

  export interface KriteriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kriteria'], meta: { name: 'Kriteria' } }
    /**
     * Find zero or one Kriteria that matches the filter.
     * @param {KriteriaFindUniqueArgs} args - Arguments to find a Kriteria
     * @example
     * // Get one Kriteria
     * const kriteria = await prisma.kriteria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KriteriaFindUniqueArgs>(args: SelectSubset<T, KriteriaFindUniqueArgs<ExtArgs>>): Prisma__KriteriaClient<$Result.GetResult<Prisma.$KriteriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kriteria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KriteriaFindUniqueOrThrowArgs} args - Arguments to find a Kriteria
     * @example
     * // Get one Kriteria
     * const kriteria = await prisma.kriteria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KriteriaFindUniqueOrThrowArgs>(args: SelectSubset<T, KriteriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KriteriaClient<$Result.GetResult<Prisma.$KriteriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kriteria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KriteriaFindFirstArgs} args - Arguments to find a Kriteria
     * @example
     * // Get one Kriteria
     * const kriteria = await prisma.kriteria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KriteriaFindFirstArgs>(args?: SelectSubset<T, KriteriaFindFirstArgs<ExtArgs>>): Prisma__KriteriaClient<$Result.GetResult<Prisma.$KriteriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kriteria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KriteriaFindFirstOrThrowArgs} args - Arguments to find a Kriteria
     * @example
     * // Get one Kriteria
     * const kriteria = await prisma.kriteria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KriteriaFindFirstOrThrowArgs>(args?: SelectSubset<T, KriteriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__KriteriaClient<$Result.GetResult<Prisma.$KriteriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kriterias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KriteriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kriterias
     * const kriterias = await prisma.kriteria.findMany()
     * 
     * // Get first 10 Kriterias
     * const kriterias = await prisma.kriteria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kriteriaWithIdOnly = await prisma.kriteria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KriteriaFindManyArgs>(args?: SelectSubset<T, KriteriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KriteriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kriteria.
     * @param {KriteriaCreateArgs} args - Arguments to create a Kriteria.
     * @example
     * // Create one Kriteria
     * const Kriteria = await prisma.kriteria.create({
     *   data: {
     *     // ... data to create a Kriteria
     *   }
     * })
     * 
     */
    create<T extends KriteriaCreateArgs>(args: SelectSubset<T, KriteriaCreateArgs<ExtArgs>>): Prisma__KriteriaClient<$Result.GetResult<Prisma.$KriteriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kriterias.
     * @param {KriteriaCreateManyArgs} args - Arguments to create many Kriterias.
     * @example
     * // Create many Kriterias
     * const kriteria = await prisma.kriteria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KriteriaCreateManyArgs>(args?: SelectSubset<T, KriteriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Kriteria.
     * @param {KriteriaDeleteArgs} args - Arguments to delete one Kriteria.
     * @example
     * // Delete one Kriteria
     * const Kriteria = await prisma.kriteria.delete({
     *   where: {
     *     // ... filter to delete one Kriteria
     *   }
     * })
     * 
     */
    delete<T extends KriteriaDeleteArgs>(args: SelectSubset<T, KriteriaDeleteArgs<ExtArgs>>): Prisma__KriteriaClient<$Result.GetResult<Prisma.$KriteriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kriteria.
     * @param {KriteriaUpdateArgs} args - Arguments to update one Kriteria.
     * @example
     * // Update one Kriteria
     * const kriteria = await prisma.kriteria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KriteriaUpdateArgs>(args: SelectSubset<T, KriteriaUpdateArgs<ExtArgs>>): Prisma__KriteriaClient<$Result.GetResult<Prisma.$KriteriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kriterias.
     * @param {KriteriaDeleteManyArgs} args - Arguments to filter Kriterias to delete.
     * @example
     * // Delete a few Kriterias
     * const { count } = await prisma.kriteria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KriteriaDeleteManyArgs>(args?: SelectSubset<T, KriteriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kriterias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KriteriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kriterias
     * const kriteria = await prisma.kriteria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KriteriaUpdateManyArgs>(args: SelectSubset<T, KriteriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Kriteria.
     * @param {KriteriaUpsertArgs} args - Arguments to update or create a Kriteria.
     * @example
     * // Update or create a Kriteria
     * const kriteria = await prisma.kriteria.upsert({
     *   create: {
     *     // ... data to create a Kriteria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kriteria we want to update
     *   }
     * })
     */
    upsert<T extends KriteriaUpsertArgs>(args: SelectSubset<T, KriteriaUpsertArgs<ExtArgs>>): Prisma__KriteriaClient<$Result.GetResult<Prisma.$KriteriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kriterias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KriteriaCountArgs} args - Arguments to filter Kriterias to count.
     * @example
     * // Count the number of Kriterias
     * const count = await prisma.kriteria.count({
     *   where: {
     *     // ... the filter for the Kriterias we want to count
     *   }
     * })
    **/
    count<T extends KriteriaCountArgs>(
      args?: Subset<T, KriteriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KriteriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kriteria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KriteriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KriteriaAggregateArgs>(args: Subset<T, KriteriaAggregateArgs>): Prisma.PrismaPromise<GetKriteriaAggregateType<T>>

    /**
     * Group by Kriteria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KriteriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KriteriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KriteriaGroupByArgs['orderBy'] }
        : { orderBy?: KriteriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KriteriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKriteriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kriteria model
   */
  readonly fields: KriteriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kriteria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KriteriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    SubKriteria<T extends Kriteria$SubKriteriaArgs<ExtArgs> = {}>(args?: Subset<T, Kriteria$SubKriteriaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubKriteriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Kriteria model
   */
  interface KriteriaFieldRefs {
    readonly id: FieldRef<"Kriteria", 'Int'>
    readonly nama: FieldRef<"Kriteria", 'String'>
    readonly bobot: FieldRef<"Kriteria", 'Float'>
    readonly deskripsi: FieldRef<"Kriteria", 'String'>
    readonly createdAt: FieldRef<"Kriteria", 'DateTime'>
    readonly updatedAt: FieldRef<"Kriteria", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Kriteria findUnique
   */
  export type KriteriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kriteria
     */
    select?: KriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kriteria
     */
    omit?: KriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KriteriaInclude<ExtArgs> | null
    /**
     * Filter, which Kriteria to fetch.
     */
    where: KriteriaWhereUniqueInput
  }

  /**
   * Kriteria findUniqueOrThrow
   */
  export type KriteriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kriteria
     */
    select?: KriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kriteria
     */
    omit?: KriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KriteriaInclude<ExtArgs> | null
    /**
     * Filter, which Kriteria to fetch.
     */
    where: KriteriaWhereUniqueInput
  }

  /**
   * Kriteria findFirst
   */
  export type KriteriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kriteria
     */
    select?: KriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kriteria
     */
    omit?: KriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KriteriaInclude<ExtArgs> | null
    /**
     * Filter, which Kriteria to fetch.
     */
    where?: KriteriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kriterias to fetch.
     */
    orderBy?: KriteriaOrderByWithRelationInput | KriteriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kriterias.
     */
    cursor?: KriteriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kriterias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kriterias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kriterias.
     */
    distinct?: KriteriaScalarFieldEnum | KriteriaScalarFieldEnum[]
  }

  /**
   * Kriteria findFirstOrThrow
   */
  export type KriteriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kriteria
     */
    select?: KriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kriteria
     */
    omit?: KriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KriteriaInclude<ExtArgs> | null
    /**
     * Filter, which Kriteria to fetch.
     */
    where?: KriteriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kriterias to fetch.
     */
    orderBy?: KriteriaOrderByWithRelationInput | KriteriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kriterias.
     */
    cursor?: KriteriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kriterias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kriterias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kriterias.
     */
    distinct?: KriteriaScalarFieldEnum | KriteriaScalarFieldEnum[]
  }

  /**
   * Kriteria findMany
   */
  export type KriteriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kriteria
     */
    select?: KriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kriteria
     */
    omit?: KriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KriteriaInclude<ExtArgs> | null
    /**
     * Filter, which Kriterias to fetch.
     */
    where?: KriteriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kriterias to fetch.
     */
    orderBy?: KriteriaOrderByWithRelationInput | KriteriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kriterias.
     */
    cursor?: KriteriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kriterias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kriterias.
     */
    skip?: number
    distinct?: KriteriaScalarFieldEnum | KriteriaScalarFieldEnum[]
  }

  /**
   * Kriteria create
   */
  export type KriteriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kriteria
     */
    select?: KriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kriteria
     */
    omit?: KriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KriteriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Kriteria.
     */
    data: XOR<KriteriaCreateInput, KriteriaUncheckedCreateInput>
  }

  /**
   * Kriteria createMany
   */
  export type KriteriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kriterias.
     */
    data: KriteriaCreateManyInput | KriteriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kriteria update
   */
  export type KriteriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kriteria
     */
    select?: KriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kriteria
     */
    omit?: KriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KriteriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Kriteria.
     */
    data: XOR<KriteriaUpdateInput, KriteriaUncheckedUpdateInput>
    /**
     * Choose, which Kriteria to update.
     */
    where: KriteriaWhereUniqueInput
  }

  /**
   * Kriteria updateMany
   */
  export type KriteriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kriterias.
     */
    data: XOR<KriteriaUpdateManyMutationInput, KriteriaUncheckedUpdateManyInput>
    /**
     * Filter which Kriterias to update
     */
    where?: KriteriaWhereInput
    /**
     * Limit how many Kriterias to update.
     */
    limit?: number
  }

  /**
   * Kriteria upsert
   */
  export type KriteriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kriteria
     */
    select?: KriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kriteria
     */
    omit?: KriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KriteriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Kriteria to update in case it exists.
     */
    where: KriteriaWhereUniqueInput
    /**
     * In case the Kriteria found by the `where` argument doesn't exist, create a new Kriteria with this data.
     */
    create: XOR<KriteriaCreateInput, KriteriaUncheckedCreateInput>
    /**
     * In case the Kriteria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KriteriaUpdateInput, KriteriaUncheckedUpdateInput>
  }

  /**
   * Kriteria delete
   */
  export type KriteriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kriteria
     */
    select?: KriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kriteria
     */
    omit?: KriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KriteriaInclude<ExtArgs> | null
    /**
     * Filter which Kriteria to delete.
     */
    where: KriteriaWhereUniqueInput
  }

  /**
   * Kriteria deleteMany
   */
  export type KriteriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kriterias to delete
     */
    where?: KriteriaWhereInput
    /**
     * Limit how many Kriterias to delete.
     */
    limit?: number
  }

  /**
   * Kriteria.SubKriteria
   */
  export type Kriteria$SubKriteriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubKriteria
     */
    select?: SubKriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubKriteria
     */
    omit?: SubKriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubKriteriaInclude<ExtArgs> | null
    where?: SubKriteriaWhereInput
    orderBy?: SubKriteriaOrderByWithRelationInput | SubKriteriaOrderByWithRelationInput[]
    cursor?: SubKriteriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubKriteriaScalarFieldEnum | SubKriteriaScalarFieldEnum[]
  }

  /**
   * Kriteria without action
   */
  export type KriteriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kriteria
     */
    select?: KriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kriteria
     */
    omit?: KriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KriteriaInclude<ExtArgs> | null
  }


  /**
   * Model Dosen
   */

  export type AggregateDosen = {
    _count: DosenCountAggregateOutputType | null
    _avg: DosenAvgAggregateOutputType | null
    _sum: DosenSumAggregateOutputType | null
    _min: DosenMinAggregateOutputType | null
    _max: DosenMaxAggregateOutputType | null
  }

  export type DosenAvgAggregateOutputType = {
    id: number | null
    homebaseId: number | null
  }

  export type DosenSumAggregateOutputType = {
    id: number | null
    homebaseId: number | null
  }

  export type DosenMinAggregateOutputType = {
    id: number | null
    nama: string | null
    nip: string | null
    jabatan: $Enums.Jabatan | null
    homebaseId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DosenMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    nip: string | null
    jabatan: $Enums.Jabatan | null
    homebaseId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DosenCountAggregateOutputType = {
    id: number
    nama: number
    nip: number
    jabatan: number
    homebaseId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DosenAvgAggregateInputType = {
    id?: true
    homebaseId?: true
  }

  export type DosenSumAggregateInputType = {
    id?: true
    homebaseId?: true
  }

  export type DosenMinAggregateInputType = {
    id?: true
    nama?: true
    nip?: true
    jabatan?: true
    homebaseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DosenMaxAggregateInputType = {
    id?: true
    nama?: true
    nip?: true
    jabatan?: true
    homebaseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DosenCountAggregateInputType = {
    id?: true
    nama?: true
    nip?: true
    jabatan?: true
    homebaseId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DosenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dosen to aggregate.
     */
    where?: DosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dosens to fetch.
     */
    orderBy?: DosenOrderByWithRelationInput | DosenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dosens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dosens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dosens
    **/
    _count?: true | DosenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DosenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DosenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DosenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DosenMaxAggregateInputType
  }

  export type GetDosenAggregateType<T extends DosenAggregateArgs> = {
        [P in keyof T & keyof AggregateDosen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDosen[P]>
      : GetScalarType<T[P], AggregateDosen[P]>
  }




  export type DosenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DosenWhereInput
    orderBy?: DosenOrderByWithAggregationInput | DosenOrderByWithAggregationInput[]
    by: DosenScalarFieldEnum[] | DosenScalarFieldEnum
    having?: DosenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DosenCountAggregateInputType | true
    _avg?: DosenAvgAggregateInputType
    _sum?: DosenSumAggregateInputType
    _min?: DosenMinAggregateInputType
    _max?: DosenMaxAggregateInputType
  }

  export type DosenGroupByOutputType = {
    id: number
    nama: string
    nip: string
    jabatan: $Enums.Jabatan
    homebaseId: number
    createdAt: Date
    updatedAt: Date
    _count: DosenCountAggregateOutputType | null
    _avg: DosenAvgAggregateOutputType | null
    _sum: DosenSumAggregateOutputType | null
    _min: DosenMinAggregateOutputType | null
    _max: DosenMaxAggregateOutputType | null
  }

  type GetDosenGroupByPayload<T extends DosenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DosenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DosenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DosenGroupByOutputType[P]>
            : GetScalarType<T[P], DosenGroupByOutputType[P]>
        }
      >
    >


  export type DosenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    nip?: boolean
    jabatan?: boolean
    homebaseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    homebase?: boolean | HomebaseDefaultArgs<ExtArgs>
    Report?: boolean | Dosen$ReportArgs<ExtArgs>
    Dokumen?: boolean | Dosen$DokumenArgs<ExtArgs>
    _count?: boolean | DosenCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dosen"]>



  export type DosenSelectScalar = {
    id?: boolean
    nama?: boolean
    nip?: boolean
    jabatan?: boolean
    homebaseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DosenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "nip" | "jabatan" | "homebaseId" | "createdAt" | "updatedAt", ExtArgs["result"]["dosen"]>
  export type DosenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    homebase?: boolean | HomebaseDefaultArgs<ExtArgs>
    Report?: boolean | Dosen$ReportArgs<ExtArgs>
    Dokumen?: boolean | Dosen$DokumenArgs<ExtArgs>
    _count?: boolean | DosenCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DosenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dosen"
    objects: {
      homebase: Prisma.$HomebasePayload<ExtArgs>
      Report: Prisma.$ReportPayload<ExtArgs>[]
      Dokumen: Prisma.$DokumenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      nip: string
      jabatan: $Enums.Jabatan
      homebaseId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dosen"]>
    composites: {}
  }

  type DosenGetPayload<S extends boolean | null | undefined | DosenDefaultArgs> = $Result.GetResult<Prisma.$DosenPayload, S>

  type DosenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DosenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DosenCountAggregateInputType | true
    }

  export interface DosenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dosen'], meta: { name: 'Dosen' } }
    /**
     * Find zero or one Dosen that matches the filter.
     * @param {DosenFindUniqueArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DosenFindUniqueArgs>(args: SelectSubset<T, DosenFindUniqueArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dosen that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DosenFindUniqueOrThrowArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DosenFindUniqueOrThrowArgs>(args: SelectSubset<T, DosenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dosen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenFindFirstArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DosenFindFirstArgs>(args?: SelectSubset<T, DosenFindFirstArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dosen that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenFindFirstOrThrowArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DosenFindFirstOrThrowArgs>(args?: SelectSubset<T, DosenFindFirstOrThrowArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dosens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dosens
     * const dosens = await prisma.dosen.findMany()
     * 
     * // Get first 10 Dosens
     * const dosens = await prisma.dosen.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dosenWithIdOnly = await prisma.dosen.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DosenFindManyArgs>(args?: SelectSubset<T, DosenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dosen.
     * @param {DosenCreateArgs} args - Arguments to create a Dosen.
     * @example
     * // Create one Dosen
     * const Dosen = await prisma.dosen.create({
     *   data: {
     *     // ... data to create a Dosen
     *   }
     * })
     * 
     */
    create<T extends DosenCreateArgs>(args: SelectSubset<T, DosenCreateArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dosens.
     * @param {DosenCreateManyArgs} args - Arguments to create many Dosens.
     * @example
     * // Create many Dosens
     * const dosen = await prisma.dosen.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DosenCreateManyArgs>(args?: SelectSubset<T, DosenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Dosen.
     * @param {DosenDeleteArgs} args - Arguments to delete one Dosen.
     * @example
     * // Delete one Dosen
     * const Dosen = await prisma.dosen.delete({
     *   where: {
     *     // ... filter to delete one Dosen
     *   }
     * })
     * 
     */
    delete<T extends DosenDeleteArgs>(args: SelectSubset<T, DosenDeleteArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dosen.
     * @param {DosenUpdateArgs} args - Arguments to update one Dosen.
     * @example
     * // Update one Dosen
     * const dosen = await prisma.dosen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DosenUpdateArgs>(args: SelectSubset<T, DosenUpdateArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dosens.
     * @param {DosenDeleteManyArgs} args - Arguments to filter Dosens to delete.
     * @example
     * // Delete a few Dosens
     * const { count } = await prisma.dosen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DosenDeleteManyArgs>(args?: SelectSubset<T, DosenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dosens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dosens
     * const dosen = await prisma.dosen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DosenUpdateManyArgs>(args: SelectSubset<T, DosenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dosen.
     * @param {DosenUpsertArgs} args - Arguments to update or create a Dosen.
     * @example
     * // Update or create a Dosen
     * const dosen = await prisma.dosen.upsert({
     *   create: {
     *     // ... data to create a Dosen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dosen we want to update
     *   }
     * })
     */
    upsert<T extends DosenUpsertArgs>(args: SelectSubset<T, DosenUpsertArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dosens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenCountArgs} args - Arguments to filter Dosens to count.
     * @example
     * // Count the number of Dosens
     * const count = await prisma.dosen.count({
     *   where: {
     *     // ... the filter for the Dosens we want to count
     *   }
     * })
    **/
    count<T extends DosenCountArgs>(
      args?: Subset<T, DosenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DosenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dosen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DosenAggregateArgs>(args: Subset<T, DosenAggregateArgs>): Prisma.PrismaPromise<GetDosenAggregateType<T>>

    /**
     * Group by Dosen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DosenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DosenGroupByArgs['orderBy'] }
        : { orderBy?: DosenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DosenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDosenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dosen model
   */
  readonly fields: DosenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dosen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DosenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    homebase<T extends HomebaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HomebaseDefaultArgs<ExtArgs>>): Prisma__HomebaseClient<$Result.GetResult<Prisma.$HomebasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Report<T extends Dosen$ReportArgs<ExtArgs> = {}>(args?: Subset<T, Dosen$ReportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Dokumen<T extends Dosen$DokumenArgs<ExtArgs> = {}>(args?: Subset<T, Dosen$DokumenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DokumenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Dosen model
   */
  interface DosenFieldRefs {
    readonly id: FieldRef<"Dosen", 'Int'>
    readonly nama: FieldRef<"Dosen", 'String'>
    readonly nip: FieldRef<"Dosen", 'String'>
    readonly jabatan: FieldRef<"Dosen", 'Jabatan'>
    readonly homebaseId: FieldRef<"Dosen", 'Int'>
    readonly createdAt: FieldRef<"Dosen", 'DateTime'>
    readonly updatedAt: FieldRef<"Dosen", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Dosen findUnique
   */
  export type DosenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * Filter, which Dosen to fetch.
     */
    where: DosenWhereUniqueInput
  }

  /**
   * Dosen findUniqueOrThrow
   */
  export type DosenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * Filter, which Dosen to fetch.
     */
    where: DosenWhereUniqueInput
  }

  /**
   * Dosen findFirst
   */
  export type DosenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * Filter, which Dosen to fetch.
     */
    where?: DosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dosens to fetch.
     */
    orderBy?: DosenOrderByWithRelationInput | DosenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dosens.
     */
    cursor?: DosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dosens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dosens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dosens.
     */
    distinct?: DosenScalarFieldEnum | DosenScalarFieldEnum[]
  }

  /**
   * Dosen findFirstOrThrow
   */
  export type DosenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * Filter, which Dosen to fetch.
     */
    where?: DosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dosens to fetch.
     */
    orderBy?: DosenOrderByWithRelationInput | DosenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dosens.
     */
    cursor?: DosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dosens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dosens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dosens.
     */
    distinct?: DosenScalarFieldEnum | DosenScalarFieldEnum[]
  }

  /**
   * Dosen findMany
   */
  export type DosenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * Filter, which Dosens to fetch.
     */
    where?: DosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dosens to fetch.
     */
    orderBy?: DosenOrderByWithRelationInput | DosenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dosens.
     */
    cursor?: DosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dosens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dosens.
     */
    skip?: number
    distinct?: DosenScalarFieldEnum | DosenScalarFieldEnum[]
  }

  /**
   * Dosen create
   */
  export type DosenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * The data needed to create a Dosen.
     */
    data: XOR<DosenCreateInput, DosenUncheckedCreateInput>
  }

  /**
   * Dosen createMany
   */
  export type DosenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dosens.
     */
    data: DosenCreateManyInput | DosenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dosen update
   */
  export type DosenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * The data needed to update a Dosen.
     */
    data: XOR<DosenUpdateInput, DosenUncheckedUpdateInput>
    /**
     * Choose, which Dosen to update.
     */
    where: DosenWhereUniqueInput
  }

  /**
   * Dosen updateMany
   */
  export type DosenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dosens.
     */
    data: XOR<DosenUpdateManyMutationInput, DosenUncheckedUpdateManyInput>
    /**
     * Filter which Dosens to update
     */
    where?: DosenWhereInput
    /**
     * Limit how many Dosens to update.
     */
    limit?: number
  }

  /**
   * Dosen upsert
   */
  export type DosenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * The filter to search for the Dosen to update in case it exists.
     */
    where: DosenWhereUniqueInput
    /**
     * In case the Dosen found by the `where` argument doesn't exist, create a new Dosen with this data.
     */
    create: XOR<DosenCreateInput, DosenUncheckedCreateInput>
    /**
     * In case the Dosen was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DosenUpdateInput, DosenUncheckedUpdateInput>
  }

  /**
   * Dosen delete
   */
  export type DosenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * Filter which Dosen to delete.
     */
    where: DosenWhereUniqueInput
  }

  /**
   * Dosen deleteMany
   */
  export type DosenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dosens to delete
     */
    where?: DosenWhereInput
    /**
     * Limit how many Dosens to delete.
     */
    limit?: number
  }

  /**
   * Dosen.Report
   */
  export type Dosen$ReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Dosen.Dokumen
   */
  export type Dosen$DokumenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokumen
     */
    select?: DokumenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokumen
     */
    omit?: DokumenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenInclude<ExtArgs> | null
    where?: DokumenWhereInput
    orderBy?: DokumenOrderByWithRelationInput | DokumenOrderByWithRelationInput[]
    cursor?: DokumenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DokumenScalarFieldEnum | DokumenScalarFieldEnum[]
  }

  /**
   * Dosen without action
   */
  export type DosenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
  }


  /**
   * Model Report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _avg: ReportAvgAggregateOutputType | null
    _sum: ReportSumAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportAvgAggregateOutputType = {
    id: number | null
    nilaiAkhir: number | null
    dosenId: number | null
    periodeId: number | null
  }

  export type ReportSumAggregateOutputType = {
    id: number | null
    nilaiAkhir: number | null
    dosenId: number | null
    periodeId: number | null
  }

  export type ReportMinAggregateOutputType = {
    id: number | null
    nilaiAkhir: number | null
    status: $Enums.ReportStatus | null
    dosenId: number | null
    periodeId: number | null
    deskripsi: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReportMaxAggregateOutputType = {
    id: number | null
    nilaiAkhir: number | null
    status: $Enums.ReportStatus | null
    dosenId: number | null
    periodeId: number | null
    deskripsi: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    nilaiAkhir: number
    status: number
    dosenId: number
    periodeId: number
    deskripsi: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReportAvgAggregateInputType = {
    id?: true
    nilaiAkhir?: true
    dosenId?: true
    periodeId?: true
  }

  export type ReportSumAggregateInputType = {
    id?: true
    nilaiAkhir?: true
    dosenId?: true
    periodeId?: true
  }

  export type ReportMinAggregateInputType = {
    id?: true
    nilaiAkhir?: true
    status?: true
    dosenId?: true
    periodeId?: true
    deskripsi?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    nilaiAkhir?: true
    status?: true
    dosenId?: true
    periodeId?: true
    deskripsi?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    nilaiAkhir?: true
    status?: true
    dosenId?: true
    periodeId?: true
    deskripsi?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Report to aggregate.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type ReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithAggregationInput | ReportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: ReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _avg?: ReportAvgAggregateInputType
    _sum?: ReportSumAggregateInputType
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    id: number
    nilaiAkhir: number | null
    status: $Enums.ReportStatus
    dosenId: number
    periodeId: number
    deskripsi: string
    createdAt: Date
    updatedAt: Date
    _count: ReportCountAggregateOutputType | null
    _avg: ReportAvgAggregateOutputType | null
    _sum: ReportSumAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends ReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type ReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nilaiAkhir?: boolean
    status?: boolean
    dosenId?: boolean
    periodeId?: boolean
    deskripsi?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dosen?: boolean | DosenDefaultArgs<ExtArgs>
    periode?: boolean | PeriodeDefaultArgs<ExtArgs>
    Penilaian?: boolean | Report$PenilaianArgs<ExtArgs>
    _count?: boolean | ReportCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>



  export type ReportSelectScalar = {
    id?: boolean
    nilaiAkhir?: boolean
    status?: boolean
    dosenId?: boolean
    periodeId?: boolean
    deskripsi?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nilaiAkhir" | "status" | "dosenId" | "periodeId" | "deskripsi" | "createdAt" | "updatedAt", ExtArgs["result"]["report"]>
  export type ReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dosen?: boolean | DosenDefaultArgs<ExtArgs>
    periode?: boolean | PeriodeDefaultArgs<ExtArgs>
    Penilaian?: boolean | Report$PenilaianArgs<ExtArgs>
    _count?: boolean | ReportCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Report"
    objects: {
      dosen: Prisma.$DosenPayload<ExtArgs>
      periode: Prisma.$PeriodePayload<ExtArgs>
      Penilaian: Prisma.$PenilaianPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nilaiAkhir: number | null
      status: $Enums.ReportStatus
      dosenId: number
      periodeId: number
      deskripsi: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type ReportGetPayload<S extends boolean | null | undefined | ReportDefaultArgs> = $Result.GetResult<Prisma.$ReportPayload, S>

  type ReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface ReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Report'], meta: { name: 'Report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {ReportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportFindUniqueArgs>(args: SelectSubset<T, ReportFindUniqueArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportFindFirstArgs>(args?: SelectSubset<T, ReportFindFirstArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportFindManyArgs>(args?: SelectSubset<T, ReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report.
     * @param {ReportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends ReportCreateArgs>(args: SelectSubset<T, ReportCreateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {ReportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportCreateManyArgs>(args?: SelectSubset<T, ReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Report.
     * @param {ReportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends ReportDeleteArgs>(args: SelectSubset<T, ReportDeleteArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report.
     * @param {ReportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportUpdateArgs>(args: SelectSubset<T, ReportUpdateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {ReportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportDeleteManyArgs>(args?: SelectSubset<T, ReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportUpdateManyArgs>(args: SelectSubset<T, ReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Report.
     * @param {ReportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends ReportUpsertArgs>(args: SelectSubset<T, ReportUpsertArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportCountArgs>(
      args?: Subset<T, ReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportGroupByArgs['orderBy'] }
        : { orderBy?: ReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Report model
   */
  readonly fields: ReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dosen<T extends DosenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DosenDefaultArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    periode<T extends PeriodeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PeriodeDefaultArgs<ExtArgs>>): Prisma__PeriodeClient<$Result.GetResult<Prisma.$PeriodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Penilaian<T extends Report$PenilaianArgs<ExtArgs> = {}>(args?: Subset<T, Report$PenilaianArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenilaianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Report model
   */
  interface ReportFieldRefs {
    readonly id: FieldRef<"Report", 'Int'>
    readonly nilaiAkhir: FieldRef<"Report", 'Float'>
    readonly status: FieldRef<"Report", 'ReportStatus'>
    readonly dosenId: FieldRef<"Report", 'Int'>
    readonly periodeId: FieldRef<"Report", 'Int'>
    readonly deskripsi: FieldRef<"Report", 'String'>
    readonly createdAt: FieldRef<"Report", 'DateTime'>
    readonly updatedAt: FieldRef<"Report", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Report findUnique
   */
  export type ReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findUniqueOrThrow
   */
  export type ReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findFirst
   */
  export type ReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findFirstOrThrow
   */
  export type ReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findMany
   */
  export type ReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report create
   */
  export type ReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to create a Report.
     */
    data: XOR<ReportCreateInput, ReportUncheckedCreateInput>
  }

  /**
   * Report createMany
   */
  export type ReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Report update
   */
  export type ReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to update a Report.
     */
    data: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
    /**
     * Choose, which Report to update.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report updateMany
   */
  export type ReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
  }

  /**
   * Report upsert
   */
  export type ReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The filter to search for the Report to update in case it exists.
     */
    where: ReportWhereUniqueInput
    /**
     * In case the Report found by the `where` argument doesn't exist, create a new Report with this data.
     */
    create: XOR<ReportCreateInput, ReportUncheckedCreateInput>
    /**
     * In case the Report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
  }

  /**
   * Report delete
   */
  export type ReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter which Report to delete.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report deleteMany
   */
  export type ReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to delete.
     */
    limit?: number
  }

  /**
   * Report.Penilaian
   */
  export type Report$PenilaianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penilaian
     */
    select?: PenilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penilaian
     */
    omit?: PenilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenilaianInclude<ExtArgs> | null
    where?: PenilaianWhereInput
    orderBy?: PenilaianOrderByWithRelationInput | PenilaianOrderByWithRelationInput[]
    cursor?: PenilaianWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PenilaianScalarFieldEnum | PenilaianScalarFieldEnum[]
  }

  /**
   * Report without action
   */
  export type ReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
  }


  /**
   * Model SubKriteria
   */

  export type AggregateSubKriteria = {
    _count: SubKriteriaCountAggregateOutputType | null
    _avg: SubKriteriaAvgAggregateOutputType | null
    _sum: SubKriteriaSumAggregateOutputType | null
    _min: SubKriteriaMinAggregateOutputType | null
    _max: SubKriteriaMaxAggregateOutputType | null
  }

  export type SubKriteriaAvgAggregateOutputType = {
    id: number | null
    nilaiMaksimal: number | null
    kriteriaId: number | null
  }

  export type SubKriteriaSumAggregateOutputType = {
    id: number | null
    nilaiMaksimal: number | null
    kriteriaId: number | null
  }

  export type SubKriteriaMinAggregateOutputType = {
    id: number | null
    nama: string | null
    nilaiMaksimal: number | null
    kriteriaId: number | null
    jenis: $Enums.JenisPenilaian | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubKriteriaMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    nilaiMaksimal: number | null
    kriteriaId: number | null
    jenis: $Enums.JenisPenilaian | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubKriteriaCountAggregateOutputType = {
    id: number
    nama: number
    nilaiMaksimal: number
    kriteriaId: number
    jenis: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubKriteriaAvgAggregateInputType = {
    id?: true
    nilaiMaksimal?: true
    kriteriaId?: true
  }

  export type SubKriteriaSumAggregateInputType = {
    id?: true
    nilaiMaksimal?: true
    kriteriaId?: true
  }

  export type SubKriteriaMinAggregateInputType = {
    id?: true
    nama?: true
    nilaiMaksimal?: true
    kriteriaId?: true
    jenis?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubKriteriaMaxAggregateInputType = {
    id?: true
    nama?: true
    nilaiMaksimal?: true
    kriteriaId?: true
    jenis?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubKriteriaCountAggregateInputType = {
    id?: true
    nama?: true
    nilaiMaksimal?: true
    kriteriaId?: true
    jenis?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubKriteriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubKriteria to aggregate.
     */
    where?: SubKriteriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubKriterias to fetch.
     */
    orderBy?: SubKriteriaOrderByWithRelationInput | SubKriteriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubKriteriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubKriterias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubKriterias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubKriterias
    **/
    _count?: true | SubKriteriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubKriteriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubKriteriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubKriteriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubKriteriaMaxAggregateInputType
  }

  export type GetSubKriteriaAggregateType<T extends SubKriteriaAggregateArgs> = {
        [P in keyof T & keyof AggregateSubKriteria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubKriteria[P]>
      : GetScalarType<T[P], AggregateSubKriteria[P]>
  }




  export type SubKriteriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubKriteriaWhereInput
    orderBy?: SubKriteriaOrderByWithAggregationInput | SubKriteriaOrderByWithAggregationInput[]
    by: SubKriteriaScalarFieldEnum[] | SubKriteriaScalarFieldEnum
    having?: SubKriteriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubKriteriaCountAggregateInputType | true
    _avg?: SubKriteriaAvgAggregateInputType
    _sum?: SubKriteriaSumAggregateInputType
    _min?: SubKriteriaMinAggregateInputType
    _max?: SubKriteriaMaxAggregateInputType
  }

  export type SubKriteriaGroupByOutputType = {
    id: number
    nama: string
    nilaiMaksimal: number
    kriteriaId: number
    jenis: $Enums.JenisPenilaian
    createdAt: Date
    updatedAt: Date
    _count: SubKriteriaCountAggregateOutputType | null
    _avg: SubKriteriaAvgAggregateOutputType | null
    _sum: SubKriteriaSumAggregateOutputType | null
    _min: SubKriteriaMinAggregateOutputType | null
    _max: SubKriteriaMaxAggregateOutputType | null
  }

  type GetSubKriteriaGroupByPayload<T extends SubKriteriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubKriteriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubKriteriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubKriteriaGroupByOutputType[P]>
            : GetScalarType<T[P], SubKriteriaGroupByOutputType[P]>
        }
      >
    >


  export type SubKriteriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    nilaiMaksimal?: boolean
    kriteriaId?: boolean
    jenis?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kriteria?: boolean | KriteriaDefaultArgs<ExtArgs>
    Penilaian?: boolean | SubKriteria$PenilaianArgs<ExtArgs>
    _count?: boolean | SubKriteriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subKriteria"]>



  export type SubKriteriaSelectScalar = {
    id?: boolean
    nama?: boolean
    nilaiMaksimal?: boolean
    kriteriaId?: boolean
    jenis?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubKriteriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "nilaiMaksimal" | "kriteriaId" | "jenis" | "createdAt" | "updatedAt", ExtArgs["result"]["subKriteria"]>
  export type SubKriteriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kriteria?: boolean | KriteriaDefaultArgs<ExtArgs>
    Penilaian?: boolean | SubKriteria$PenilaianArgs<ExtArgs>
    _count?: boolean | SubKriteriaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SubKriteriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubKriteria"
    objects: {
      kriteria: Prisma.$KriteriaPayload<ExtArgs>
      Penilaian: Prisma.$PenilaianPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      nilaiMaksimal: number
      kriteriaId: number
      jenis: $Enums.JenisPenilaian
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subKriteria"]>
    composites: {}
  }

  type SubKriteriaGetPayload<S extends boolean | null | undefined | SubKriteriaDefaultArgs> = $Result.GetResult<Prisma.$SubKriteriaPayload, S>

  type SubKriteriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubKriteriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubKriteriaCountAggregateInputType | true
    }

  export interface SubKriteriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubKriteria'], meta: { name: 'SubKriteria' } }
    /**
     * Find zero or one SubKriteria that matches the filter.
     * @param {SubKriteriaFindUniqueArgs} args - Arguments to find a SubKriteria
     * @example
     * // Get one SubKriteria
     * const subKriteria = await prisma.subKriteria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubKriteriaFindUniqueArgs>(args: SelectSubset<T, SubKriteriaFindUniqueArgs<ExtArgs>>): Prisma__SubKriteriaClient<$Result.GetResult<Prisma.$SubKriteriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubKriteria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubKriteriaFindUniqueOrThrowArgs} args - Arguments to find a SubKriteria
     * @example
     * // Get one SubKriteria
     * const subKriteria = await prisma.subKriteria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubKriteriaFindUniqueOrThrowArgs>(args: SelectSubset<T, SubKriteriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubKriteriaClient<$Result.GetResult<Prisma.$SubKriteriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubKriteria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubKriteriaFindFirstArgs} args - Arguments to find a SubKriteria
     * @example
     * // Get one SubKriteria
     * const subKriteria = await prisma.subKriteria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubKriteriaFindFirstArgs>(args?: SelectSubset<T, SubKriteriaFindFirstArgs<ExtArgs>>): Prisma__SubKriteriaClient<$Result.GetResult<Prisma.$SubKriteriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubKriteria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubKriteriaFindFirstOrThrowArgs} args - Arguments to find a SubKriteria
     * @example
     * // Get one SubKriteria
     * const subKriteria = await prisma.subKriteria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubKriteriaFindFirstOrThrowArgs>(args?: SelectSubset<T, SubKriteriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubKriteriaClient<$Result.GetResult<Prisma.$SubKriteriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubKriterias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubKriteriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubKriterias
     * const subKriterias = await prisma.subKriteria.findMany()
     * 
     * // Get first 10 SubKriterias
     * const subKriterias = await prisma.subKriteria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subKriteriaWithIdOnly = await prisma.subKriteria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubKriteriaFindManyArgs>(args?: SelectSubset<T, SubKriteriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubKriteriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubKriteria.
     * @param {SubKriteriaCreateArgs} args - Arguments to create a SubKriteria.
     * @example
     * // Create one SubKriteria
     * const SubKriteria = await prisma.subKriteria.create({
     *   data: {
     *     // ... data to create a SubKriteria
     *   }
     * })
     * 
     */
    create<T extends SubKriteriaCreateArgs>(args: SelectSubset<T, SubKriteriaCreateArgs<ExtArgs>>): Prisma__SubKriteriaClient<$Result.GetResult<Prisma.$SubKriteriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubKriterias.
     * @param {SubKriteriaCreateManyArgs} args - Arguments to create many SubKriterias.
     * @example
     * // Create many SubKriterias
     * const subKriteria = await prisma.subKriteria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubKriteriaCreateManyArgs>(args?: SelectSubset<T, SubKriteriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SubKriteria.
     * @param {SubKriteriaDeleteArgs} args - Arguments to delete one SubKriteria.
     * @example
     * // Delete one SubKriteria
     * const SubKriteria = await prisma.subKriteria.delete({
     *   where: {
     *     // ... filter to delete one SubKriteria
     *   }
     * })
     * 
     */
    delete<T extends SubKriteriaDeleteArgs>(args: SelectSubset<T, SubKriteriaDeleteArgs<ExtArgs>>): Prisma__SubKriteriaClient<$Result.GetResult<Prisma.$SubKriteriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubKriteria.
     * @param {SubKriteriaUpdateArgs} args - Arguments to update one SubKriteria.
     * @example
     * // Update one SubKriteria
     * const subKriteria = await prisma.subKriteria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubKriteriaUpdateArgs>(args: SelectSubset<T, SubKriteriaUpdateArgs<ExtArgs>>): Prisma__SubKriteriaClient<$Result.GetResult<Prisma.$SubKriteriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubKriterias.
     * @param {SubKriteriaDeleteManyArgs} args - Arguments to filter SubKriterias to delete.
     * @example
     * // Delete a few SubKriterias
     * const { count } = await prisma.subKriteria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubKriteriaDeleteManyArgs>(args?: SelectSubset<T, SubKriteriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubKriterias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubKriteriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubKriterias
     * const subKriteria = await prisma.subKriteria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubKriteriaUpdateManyArgs>(args: SelectSubset<T, SubKriteriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SubKriteria.
     * @param {SubKriteriaUpsertArgs} args - Arguments to update or create a SubKriteria.
     * @example
     * // Update or create a SubKriteria
     * const subKriteria = await prisma.subKriteria.upsert({
     *   create: {
     *     // ... data to create a SubKriteria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubKriteria we want to update
     *   }
     * })
     */
    upsert<T extends SubKriteriaUpsertArgs>(args: SelectSubset<T, SubKriteriaUpsertArgs<ExtArgs>>): Prisma__SubKriteriaClient<$Result.GetResult<Prisma.$SubKriteriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubKriterias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubKriteriaCountArgs} args - Arguments to filter SubKriterias to count.
     * @example
     * // Count the number of SubKriterias
     * const count = await prisma.subKriteria.count({
     *   where: {
     *     // ... the filter for the SubKriterias we want to count
     *   }
     * })
    **/
    count<T extends SubKriteriaCountArgs>(
      args?: Subset<T, SubKriteriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubKriteriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubKriteria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubKriteriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubKriteriaAggregateArgs>(args: Subset<T, SubKriteriaAggregateArgs>): Prisma.PrismaPromise<GetSubKriteriaAggregateType<T>>

    /**
     * Group by SubKriteria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubKriteriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubKriteriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubKriteriaGroupByArgs['orderBy'] }
        : { orderBy?: SubKriteriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubKriteriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubKriteriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubKriteria model
   */
  readonly fields: SubKriteriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubKriteria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubKriteriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kriteria<T extends KriteriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KriteriaDefaultArgs<ExtArgs>>): Prisma__KriteriaClient<$Result.GetResult<Prisma.$KriteriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Penilaian<T extends SubKriteria$PenilaianArgs<ExtArgs> = {}>(args?: Subset<T, SubKriteria$PenilaianArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenilaianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SubKriteria model
   */
  interface SubKriteriaFieldRefs {
    readonly id: FieldRef<"SubKriteria", 'Int'>
    readonly nama: FieldRef<"SubKriteria", 'String'>
    readonly nilaiMaksimal: FieldRef<"SubKriteria", 'Int'>
    readonly kriteriaId: FieldRef<"SubKriteria", 'Int'>
    readonly jenis: FieldRef<"SubKriteria", 'JenisPenilaian'>
    readonly createdAt: FieldRef<"SubKriteria", 'DateTime'>
    readonly updatedAt: FieldRef<"SubKriteria", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubKriteria findUnique
   */
  export type SubKriteriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubKriteria
     */
    select?: SubKriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubKriteria
     */
    omit?: SubKriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubKriteriaInclude<ExtArgs> | null
    /**
     * Filter, which SubKriteria to fetch.
     */
    where: SubKriteriaWhereUniqueInput
  }

  /**
   * SubKriteria findUniqueOrThrow
   */
  export type SubKriteriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubKriteria
     */
    select?: SubKriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubKriteria
     */
    omit?: SubKriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubKriteriaInclude<ExtArgs> | null
    /**
     * Filter, which SubKriteria to fetch.
     */
    where: SubKriteriaWhereUniqueInput
  }

  /**
   * SubKriteria findFirst
   */
  export type SubKriteriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubKriteria
     */
    select?: SubKriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubKriteria
     */
    omit?: SubKriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubKriteriaInclude<ExtArgs> | null
    /**
     * Filter, which SubKriteria to fetch.
     */
    where?: SubKriteriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubKriterias to fetch.
     */
    orderBy?: SubKriteriaOrderByWithRelationInput | SubKriteriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubKriterias.
     */
    cursor?: SubKriteriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubKriterias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubKriterias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubKriterias.
     */
    distinct?: SubKriteriaScalarFieldEnum | SubKriteriaScalarFieldEnum[]
  }

  /**
   * SubKriteria findFirstOrThrow
   */
  export type SubKriteriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubKriteria
     */
    select?: SubKriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubKriteria
     */
    omit?: SubKriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubKriteriaInclude<ExtArgs> | null
    /**
     * Filter, which SubKriteria to fetch.
     */
    where?: SubKriteriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubKriterias to fetch.
     */
    orderBy?: SubKriteriaOrderByWithRelationInput | SubKriteriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubKriterias.
     */
    cursor?: SubKriteriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubKriterias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubKriterias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubKriterias.
     */
    distinct?: SubKriteriaScalarFieldEnum | SubKriteriaScalarFieldEnum[]
  }

  /**
   * SubKriteria findMany
   */
  export type SubKriteriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubKriteria
     */
    select?: SubKriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubKriteria
     */
    omit?: SubKriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubKriteriaInclude<ExtArgs> | null
    /**
     * Filter, which SubKriterias to fetch.
     */
    where?: SubKriteriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubKriterias to fetch.
     */
    orderBy?: SubKriteriaOrderByWithRelationInput | SubKriteriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubKriterias.
     */
    cursor?: SubKriteriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubKriterias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubKriterias.
     */
    skip?: number
    distinct?: SubKriteriaScalarFieldEnum | SubKriteriaScalarFieldEnum[]
  }

  /**
   * SubKriteria create
   */
  export type SubKriteriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubKriteria
     */
    select?: SubKriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubKriteria
     */
    omit?: SubKriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubKriteriaInclude<ExtArgs> | null
    /**
     * The data needed to create a SubKriteria.
     */
    data: XOR<SubKriteriaCreateInput, SubKriteriaUncheckedCreateInput>
  }

  /**
   * SubKriteria createMany
   */
  export type SubKriteriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubKriterias.
     */
    data: SubKriteriaCreateManyInput | SubKriteriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubKriteria update
   */
  export type SubKriteriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubKriteria
     */
    select?: SubKriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubKriteria
     */
    omit?: SubKriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubKriteriaInclude<ExtArgs> | null
    /**
     * The data needed to update a SubKriteria.
     */
    data: XOR<SubKriteriaUpdateInput, SubKriteriaUncheckedUpdateInput>
    /**
     * Choose, which SubKriteria to update.
     */
    where: SubKriteriaWhereUniqueInput
  }

  /**
   * SubKriteria updateMany
   */
  export type SubKriteriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubKriterias.
     */
    data: XOR<SubKriteriaUpdateManyMutationInput, SubKriteriaUncheckedUpdateManyInput>
    /**
     * Filter which SubKriterias to update
     */
    where?: SubKriteriaWhereInput
    /**
     * Limit how many SubKriterias to update.
     */
    limit?: number
  }

  /**
   * SubKriteria upsert
   */
  export type SubKriteriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubKriteria
     */
    select?: SubKriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubKriteria
     */
    omit?: SubKriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubKriteriaInclude<ExtArgs> | null
    /**
     * The filter to search for the SubKriteria to update in case it exists.
     */
    where: SubKriteriaWhereUniqueInput
    /**
     * In case the SubKriteria found by the `where` argument doesn't exist, create a new SubKriteria with this data.
     */
    create: XOR<SubKriteriaCreateInput, SubKriteriaUncheckedCreateInput>
    /**
     * In case the SubKriteria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubKriteriaUpdateInput, SubKriteriaUncheckedUpdateInput>
  }

  /**
   * SubKriteria delete
   */
  export type SubKriteriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubKriteria
     */
    select?: SubKriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubKriteria
     */
    omit?: SubKriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubKriteriaInclude<ExtArgs> | null
    /**
     * Filter which SubKriteria to delete.
     */
    where: SubKriteriaWhereUniqueInput
  }

  /**
   * SubKriteria deleteMany
   */
  export type SubKriteriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubKriterias to delete
     */
    where?: SubKriteriaWhereInput
    /**
     * Limit how many SubKriterias to delete.
     */
    limit?: number
  }

  /**
   * SubKriteria.Penilaian
   */
  export type SubKriteria$PenilaianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penilaian
     */
    select?: PenilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penilaian
     */
    omit?: PenilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenilaianInclude<ExtArgs> | null
    where?: PenilaianWhereInput
    orderBy?: PenilaianOrderByWithRelationInput | PenilaianOrderByWithRelationInput[]
    cursor?: PenilaianWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PenilaianScalarFieldEnum | PenilaianScalarFieldEnum[]
  }

  /**
   * SubKriteria without action
   */
  export type SubKriteriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubKriteria
     */
    select?: SubKriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubKriteria
     */
    omit?: SubKriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubKriteriaInclude<ExtArgs> | null
  }


  /**
   * Model Penilaian
   */

  export type AggregatePenilaian = {
    _count: PenilaianCountAggregateOutputType | null
    _avg: PenilaianAvgAggregateOutputType | null
    _sum: PenilaianSumAggregateOutputType | null
    _min: PenilaianMinAggregateOutputType | null
    _max: PenilaianMaxAggregateOutputType | null
  }

  export type PenilaianAvgAggregateOutputType = {
    id: number | null
    nilai: number | null
    reportId: number | null
    subKriteriaId: number | null
    evaluatorId: number | null
  }

  export type PenilaianSumAggregateOutputType = {
    id: number | null
    nilai: number | null
    reportId: number | null
    subKriteriaId: number | null
    evaluatorId: number | null
  }

  export type PenilaianMinAggregateOutputType = {
    id: number | null
    nilai: number | null
    reportId: number | null
    subKriteriaId: number | null
    evaluatorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PenilaianMaxAggregateOutputType = {
    id: number | null
    nilai: number | null
    reportId: number | null
    subKriteriaId: number | null
    evaluatorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PenilaianCountAggregateOutputType = {
    id: number
    nilai: number
    reportId: number
    subKriteriaId: number
    evaluatorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PenilaianAvgAggregateInputType = {
    id?: true
    nilai?: true
    reportId?: true
    subKriteriaId?: true
    evaluatorId?: true
  }

  export type PenilaianSumAggregateInputType = {
    id?: true
    nilai?: true
    reportId?: true
    subKriteriaId?: true
    evaluatorId?: true
  }

  export type PenilaianMinAggregateInputType = {
    id?: true
    nilai?: true
    reportId?: true
    subKriteriaId?: true
    evaluatorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PenilaianMaxAggregateInputType = {
    id?: true
    nilai?: true
    reportId?: true
    subKriteriaId?: true
    evaluatorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PenilaianCountAggregateInputType = {
    id?: true
    nilai?: true
    reportId?: true
    subKriteriaId?: true
    evaluatorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PenilaianAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Penilaian to aggregate.
     */
    where?: PenilaianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penilaians to fetch.
     */
    orderBy?: PenilaianOrderByWithRelationInput | PenilaianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PenilaianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penilaians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penilaians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Penilaians
    **/
    _count?: true | PenilaianCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PenilaianAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PenilaianSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PenilaianMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PenilaianMaxAggregateInputType
  }

  export type GetPenilaianAggregateType<T extends PenilaianAggregateArgs> = {
        [P in keyof T & keyof AggregatePenilaian]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePenilaian[P]>
      : GetScalarType<T[P], AggregatePenilaian[P]>
  }




  export type PenilaianGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PenilaianWhereInput
    orderBy?: PenilaianOrderByWithAggregationInput | PenilaianOrderByWithAggregationInput[]
    by: PenilaianScalarFieldEnum[] | PenilaianScalarFieldEnum
    having?: PenilaianScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PenilaianCountAggregateInputType | true
    _avg?: PenilaianAvgAggregateInputType
    _sum?: PenilaianSumAggregateInputType
    _min?: PenilaianMinAggregateInputType
    _max?: PenilaianMaxAggregateInputType
  }

  export type PenilaianGroupByOutputType = {
    id: number
    nilai: number
    reportId: number
    subKriteriaId: number
    evaluatorId: number
    createdAt: Date
    updatedAt: Date
    _count: PenilaianCountAggregateOutputType | null
    _avg: PenilaianAvgAggregateOutputType | null
    _sum: PenilaianSumAggregateOutputType | null
    _min: PenilaianMinAggregateOutputType | null
    _max: PenilaianMaxAggregateOutputType | null
  }

  type GetPenilaianGroupByPayload<T extends PenilaianGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PenilaianGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PenilaianGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PenilaianGroupByOutputType[P]>
            : GetScalarType<T[P], PenilaianGroupByOutputType[P]>
        }
      >
    >


  export type PenilaianSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nilai?: boolean
    reportId?: boolean
    subKriteriaId?: boolean
    evaluatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    report?: boolean | ReportDefaultArgs<ExtArgs>
    subKriteria?: boolean | SubKriteriaDefaultArgs<ExtArgs>
    evaluator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["penilaian"]>



  export type PenilaianSelectScalar = {
    id?: boolean
    nilai?: boolean
    reportId?: boolean
    subKriteriaId?: boolean
    evaluatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PenilaianOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nilai" | "reportId" | "subKriteriaId" | "evaluatorId" | "createdAt" | "updatedAt", ExtArgs["result"]["penilaian"]>
  export type PenilaianInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportDefaultArgs<ExtArgs>
    subKriteria?: boolean | SubKriteriaDefaultArgs<ExtArgs>
    evaluator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PenilaianPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Penilaian"
    objects: {
      report: Prisma.$ReportPayload<ExtArgs>
      subKriteria: Prisma.$SubKriteriaPayload<ExtArgs>
      evaluator: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nilai: number
      reportId: number
      subKriteriaId: number
      evaluatorId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["penilaian"]>
    composites: {}
  }

  type PenilaianGetPayload<S extends boolean | null | undefined | PenilaianDefaultArgs> = $Result.GetResult<Prisma.$PenilaianPayload, S>

  type PenilaianCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PenilaianFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PenilaianCountAggregateInputType | true
    }

  export interface PenilaianDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Penilaian'], meta: { name: 'Penilaian' } }
    /**
     * Find zero or one Penilaian that matches the filter.
     * @param {PenilaianFindUniqueArgs} args - Arguments to find a Penilaian
     * @example
     * // Get one Penilaian
     * const penilaian = await prisma.penilaian.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PenilaianFindUniqueArgs>(args: SelectSubset<T, PenilaianFindUniqueArgs<ExtArgs>>): Prisma__PenilaianClient<$Result.GetResult<Prisma.$PenilaianPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Penilaian that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PenilaianFindUniqueOrThrowArgs} args - Arguments to find a Penilaian
     * @example
     * // Get one Penilaian
     * const penilaian = await prisma.penilaian.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PenilaianFindUniqueOrThrowArgs>(args: SelectSubset<T, PenilaianFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PenilaianClient<$Result.GetResult<Prisma.$PenilaianPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Penilaian that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaianFindFirstArgs} args - Arguments to find a Penilaian
     * @example
     * // Get one Penilaian
     * const penilaian = await prisma.penilaian.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PenilaianFindFirstArgs>(args?: SelectSubset<T, PenilaianFindFirstArgs<ExtArgs>>): Prisma__PenilaianClient<$Result.GetResult<Prisma.$PenilaianPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Penilaian that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaianFindFirstOrThrowArgs} args - Arguments to find a Penilaian
     * @example
     * // Get one Penilaian
     * const penilaian = await prisma.penilaian.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PenilaianFindFirstOrThrowArgs>(args?: SelectSubset<T, PenilaianFindFirstOrThrowArgs<ExtArgs>>): Prisma__PenilaianClient<$Result.GetResult<Prisma.$PenilaianPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Penilaians that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaianFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Penilaians
     * const penilaians = await prisma.penilaian.findMany()
     * 
     * // Get first 10 Penilaians
     * const penilaians = await prisma.penilaian.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const penilaianWithIdOnly = await prisma.penilaian.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PenilaianFindManyArgs>(args?: SelectSubset<T, PenilaianFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenilaianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Penilaian.
     * @param {PenilaianCreateArgs} args - Arguments to create a Penilaian.
     * @example
     * // Create one Penilaian
     * const Penilaian = await prisma.penilaian.create({
     *   data: {
     *     // ... data to create a Penilaian
     *   }
     * })
     * 
     */
    create<T extends PenilaianCreateArgs>(args: SelectSubset<T, PenilaianCreateArgs<ExtArgs>>): Prisma__PenilaianClient<$Result.GetResult<Prisma.$PenilaianPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Penilaians.
     * @param {PenilaianCreateManyArgs} args - Arguments to create many Penilaians.
     * @example
     * // Create many Penilaians
     * const penilaian = await prisma.penilaian.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PenilaianCreateManyArgs>(args?: SelectSubset<T, PenilaianCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Penilaian.
     * @param {PenilaianDeleteArgs} args - Arguments to delete one Penilaian.
     * @example
     * // Delete one Penilaian
     * const Penilaian = await prisma.penilaian.delete({
     *   where: {
     *     // ... filter to delete one Penilaian
     *   }
     * })
     * 
     */
    delete<T extends PenilaianDeleteArgs>(args: SelectSubset<T, PenilaianDeleteArgs<ExtArgs>>): Prisma__PenilaianClient<$Result.GetResult<Prisma.$PenilaianPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Penilaian.
     * @param {PenilaianUpdateArgs} args - Arguments to update one Penilaian.
     * @example
     * // Update one Penilaian
     * const penilaian = await prisma.penilaian.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PenilaianUpdateArgs>(args: SelectSubset<T, PenilaianUpdateArgs<ExtArgs>>): Prisma__PenilaianClient<$Result.GetResult<Prisma.$PenilaianPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Penilaians.
     * @param {PenilaianDeleteManyArgs} args - Arguments to filter Penilaians to delete.
     * @example
     * // Delete a few Penilaians
     * const { count } = await prisma.penilaian.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PenilaianDeleteManyArgs>(args?: SelectSubset<T, PenilaianDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Penilaians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaianUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Penilaians
     * const penilaian = await prisma.penilaian.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PenilaianUpdateManyArgs>(args: SelectSubset<T, PenilaianUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Penilaian.
     * @param {PenilaianUpsertArgs} args - Arguments to update or create a Penilaian.
     * @example
     * // Update or create a Penilaian
     * const penilaian = await prisma.penilaian.upsert({
     *   create: {
     *     // ... data to create a Penilaian
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Penilaian we want to update
     *   }
     * })
     */
    upsert<T extends PenilaianUpsertArgs>(args: SelectSubset<T, PenilaianUpsertArgs<ExtArgs>>): Prisma__PenilaianClient<$Result.GetResult<Prisma.$PenilaianPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Penilaians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaianCountArgs} args - Arguments to filter Penilaians to count.
     * @example
     * // Count the number of Penilaians
     * const count = await prisma.penilaian.count({
     *   where: {
     *     // ... the filter for the Penilaians we want to count
     *   }
     * })
    **/
    count<T extends PenilaianCountArgs>(
      args?: Subset<T, PenilaianCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PenilaianCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Penilaian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaianAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PenilaianAggregateArgs>(args: Subset<T, PenilaianAggregateArgs>): Prisma.PrismaPromise<GetPenilaianAggregateType<T>>

    /**
     * Group by Penilaian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaianGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PenilaianGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PenilaianGroupByArgs['orderBy'] }
        : { orderBy?: PenilaianGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PenilaianGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPenilaianGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Penilaian model
   */
  readonly fields: PenilaianFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Penilaian.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PenilaianClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends ReportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReportDefaultArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subKriteria<T extends SubKriteriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubKriteriaDefaultArgs<ExtArgs>>): Prisma__SubKriteriaClient<$Result.GetResult<Prisma.$SubKriteriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    evaluator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Penilaian model
   */
  interface PenilaianFieldRefs {
    readonly id: FieldRef<"Penilaian", 'Int'>
    readonly nilai: FieldRef<"Penilaian", 'Float'>
    readonly reportId: FieldRef<"Penilaian", 'Int'>
    readonly subKriteriaId: FieldRef<"Penilaian", 'Int'>
    readonly evaluatorId: FieldRef<"Penilaian", 'Int'>
    readonly createdAt: FieldRef<"Penilaian", 'DateTime'>
    readonly updatedAt: FieldRef<"Penilaian", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Penilaian findUnique
   */
  export type PenilaianFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penilaian
     */
    select?: PenilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penilaian
     */
    omit?: PenilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenilaianInclude<ExtArgs> | null
    /**
     * Filter, which Penilaian to fetch.
     */
    where: PenilaianWhereUniqueInput
  }

  /**
   * Penilaian findUniqueOrThrow
   */
  export type PenilaianFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penilaian
     */
    select?: PenilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penilaian
     */
    omit?: PenilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenilaianInclude<ExtArgs> | null
    /**
     * Filter, which Penilaian to fetch.
     */
    where: PenilaianWhereUniqueInput
  }

  /**
   * Penilaian findFirst
   */
  export type PenilaianFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penilaian
     */
    select?: PenilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penilaian
     */
    omit?: PenilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenilaianInclude<ExtArgs> | null
    /**
     * Filter, which Penilaian to fetch.
     */
    where?: PenilaianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penilaians to fetch.
     */
    orderBy?: PenilaianOrderByWithRelationInput | PenilaianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Penilaians.
     */
    cursor?: PenilaianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penilaians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penilaians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Penilaians.
     */
    distinct?: PenilaianScalarFieldEnum | PenilaianScalarFieldEnum[]
  }

  /**
   * Penilaian findFirstOrThrow
   */
  export type PenilaianFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penilaian
     */
    select?: PenilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penilaian
     */
    omit?: PenilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenilaianInclude<ExtArgs> | null
    /**
     * Filter, which Penilaian to fetch.
     */
    where?: PenilaianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penilaians to fetch.
     */
    orderBy?: PenilaianOrderByWithRelationInput | PenilaianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Penilaians.
     */
    cursor?: PenilaianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penilaians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penilaians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Penilaians.
     */
    distinct?: PenilaianScalarFieldEnum | PenilaianScalarFieldEnum[]
  }

  /**
   * Penilaian findMany
   */
  export type PenilaianFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penilaian
     */
    select?: PenilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penilaian
     */
    omit?: PenilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenilaianInclude<ExtArgs> | null
    /**
     * Filter, which Penilaians to fetch.
     */
    where?: PenilaianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penilaians to fetch.
     */
    orderBy?: PenilaianOrderByWithRelationInput | PenilaianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Penilaians.
     */
    cursor?: PenilaianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penilaians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penilaians.
     */
    skip?: number
    distinct?: PenilaianScalarFieldEnum | PenilaianScalarFieldEnum[]
  }

  /**
   * Penilaian create
   */
  export type PenilaianCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penilaian
     */
    select?: PenilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penilaian
     */
    omit?: PenilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenilaianInclude<ExtArgs> | null
    /**
     * The data needed to create a Penilaian.
     */
    data: XOR<PenilaianCreateInput, PenilaianUncheckedCreateInput>
  }

  /**
   * Penilaian createMany
   */
  export type PenilaianCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Penilaians.
     */
    data: PenilaianCreateManyInput | PenilaianCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Penilaian update
   */
  export type PenilaianUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penilaian
     */
    select?: PenilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penilaian
     */
    omit?: PenilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenilaianInclude<ExtArgs> | null
    /**
     * The data needed to update a Penilaian.
     */
    data: XOR<PenilaianUpdateInput, PenilaianUncheckedUpdateInput>
    /**
     * Choose, which Penilaian to update.
     */
    where: PenilaianWhereUniqueInput
  }

  /**
   * Penilaian updateMany
   */
  export type PenilaianUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Penilaians.
     */
    data: XOR<PenilaianUpdateManyMutationInput, PenilaianUncheckedUpdateManyInput>
    /**
     * Filter which Penilaians to update
     */
    where?: PenilaianWhereInput
    /**
     * Limit how many Penilaians to update.
     */
    limit?: number
  }

  /**
   * Penilaian upsert
   */
  export type PenilaianUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penilaian
     */
    select?: PenilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penilaian
     */
    omit?: PenilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenilaianInclude<ExtArgs> | null
    /**
     * The filter to search for the Penilaian to update in case it exists.
     */
    where: PenilaianWhereUniqueInput
    /**
     * In case the Penilaian found by the `where` argument doesn't exist, create a new Penilaian with this data.
     */
    create: XOR<PenilaianCreateInput, PenilaianUncheckedCreateInput>
    /**
     * In case the Penilaian was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PenilaianUpdateInput, PenilaianUncheckedUpdateInput>
  }

  /**
   * Penilaian delete
   */
  export type PenilaianDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penilaian
     */
    select?: PenilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penilaian
     */
    omit?: PenilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenilaianInclude<ExtArgs> | null
    /**
     * Filter which Penilaian to delete.
     */
    where: PenilaianWhereUniqueInput
  }

  /**
   * Penilaian deleteMany
   */
  export type PenilaianDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Penilaians to delete
     */
    where?: PenilaianWhereInput
    /**
     * Limit how many Penilaians to delete.
     */
    limit?: number
  }

  /**
   * Penilaian without action
   */
  export type PenilaianDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penilaian
     */
    select?: PenilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penilaian
     */
    omit?: PenilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenilaianInclude<ExtArgs> | null
  }


  /**
   * Model Dokumen
   */

  export type AggregateDokumen = {
    _count: DokumenCountAggregateOutputType | null
    _avg: DokumenAvgAggregateOutputType | null
    _sum: DokumenSumAggregateOutputType | null
    _min: DokumenMinAggregateOutputType | null
    _max: DokumenMaxAggregateOutputType | null
  }

  export type DokumenAvgAggregateOutputType = {
    id: number | null
    dosenId: number | null
  }

  export type DokumenSumAggregateOutputType = {
    id: number | null
    dosenId: number | null
  }

  export type DokumenMinAggregateOutputType = {
    id: number | null
    judul: string | null
    dokumenUrl: string | null
    dosenId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DokumenMaxAggregateOutputType = {
    id: number | null
    judul: string | null
    dokumenUrl: string | null
    dosenId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DokumenCountAggregateOutputType = {
    id: number
    judul: number
    dokumenUrl: number
    dosenId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DokumenAvgAggregateInputType = {
    id?: true
    dosenId?: true
  }

  export type DokumenSumAggregateInputType = {
    id?: true
    dosenId?: true
  }

  export type DokumenMinAggregateInputType = {
    id?: true
    judul?: true
    dokumenUrl?: true
    dosenId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DokumenMaxAggregateInputType = {
    id?: true
    judul?: true
    dokumenUrl?: true
    dosenId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DokumenCountAggregateInputType = {
    id?: true
    judul?: true
    dokumenUrl?: true
    dosenId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DokumenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dokumen to aggregate.
     */
    where?: DokumenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dokumen to fetch.
     */
    orderBy?: DokumenOrderByWithRelationInput | DokumenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DokumenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dokumen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dokumen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dokumen
    **/
    _count?: true | DokumenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DokumenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DokumenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DokumenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DokumenMaxAggregateInputType
  }

  export type GetDokumenAggregateType<T extends DokumenAggregateArgs> = {
        [P in keyof T & keyof AggregateDokumen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDokumen[P]>
      : GetScalarType<T[P], AggregateDokumen[P]>
  }




  export type DokumenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DokumenWhereInput
    orderBy?: DokumenOrderByWithAggregationInput | DokumenOrderByWithAggregationInput[]
    by: DokumenScalarFieldEnum[] | DokumenScalarFieldEnum
    having?: DokumenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DokumenCountAggregateInputType | true
    _avg?: DokumenAvgAggregateInputType
    _sum?: DokumenSumAggregateInputType
    _min?: DokumenMinAggregateInputType
    _max?: DokumenMaxAggregateInputType
  }

  export type DokumenGroupByOutputType = {
    id: number
    judul: string
    dokumenUrl: string
    dosenId: number
    createdAt: Date
    updatedAt: Date
    _count: DokumenCountAggregateOutputType | null
    _avg: DokumenAvgAggregateOutputType | null
    _sum: DokumenSumAggregateOutputType | null
    _min: DokumenMinAggregateOutputType | null
    _max: DokumenMaxAggregateOutputType | null
  }

  type GetDokumenGroupByPayload<T extends DokumenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DokumenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DokumenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DokumenGroupByOutputType[P]>
            : GetScalarType<T[P], DokumenGroupByOutputType[P]>
        }
      >
    >


  export type DokumenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul?: boolean
    dokumenUrl?: boolean
    dosenId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dosen?: boolean | DosenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dokumen"]>



  export type DokumenSelectScalar = {
    id?: boolean
    judul?: boolean
    dokumenUrl?: boolean
    dosenId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DokumenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "judul" | "dokumenUrl" | "dosenId" | "createdAt" | "updatedAt", ExtArgs["result"]["dokumen"]>
  export type DokumenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dosen?: boolean | DosenDefaultArgs<ExtArgs>
  }

  export type $DokumenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dokumen"
    objects: {
      dosen: Prisma.$DosenPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      judul: string
      dokumenUrl: string
      dosenId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dokumen"]>
    composites: {}
  }

  type DokumenGetPayload<S extends boolean | null | undefined | DokumenDefaultArgs> = $Result.GetResult<Prisma.$DokumenPayload, S>

  type DokumenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DokumenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DokumenCountAggregateInputType | true
    }

  export interface DokumenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dokumen'], meta: { name: 'Dokumen' } }
    /**
     * Find zero or one Dokumen that matches the filter.
     * @param {DokumenFindUniqueArgs} args - Arguments to find a Dokumen
     * @example
     * // Get one Dokumen
     * const dokumen = await prisma.dokumen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DokumenFindUniqueArgs>(args: SelectSubset<T, DokumenFindUniqueArgs<ExtArgs>>): Prisma__DokumenClient<$Result.GetResult<Prisma.$DokumenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dokumen that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DokumenFindUniqueOrThrowArgs} args - Arguments to find a Dokumen
     * @example
     * // Get one Dokumen
     * const dokumen = await prisma.dokumen.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DokumenFindUniqueOrThrowArgs>(args: SelectSubset<T, DokumenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DokumenClient<$Result.GetResult<Prisma.$DokumenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dokumen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokumenFindFirstArgs} args - Arguments to find a Dokumen
     * @example
     * // Get one Dokumen
     * const dokumen = await prisma.dokumen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DokumenFindFirstArgs>(args?: SelectSubset<T, DokumenFindFirstArgs<ExtArgs>>): Prisma__DokumenClient<$Result.GetResult<Prisma.$DokumenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dokumen that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokumenFindFirstOrThrowArgs} args - Arguments to find a Dokumen
     * @example
     * // Get one Dokumen
     * const dokumen = await prisma.dokumen.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DokumenFindFirstOrThrowArgs>(args?: SelectSubset<T, DokumenFindFirstOrThrowArgs<ExtArgs>>): Prisma__DokumenClient<$Result.GetResult<Prisma.$DokumenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dokumen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokumenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dokumen
     * const dokumen = await prisma.dokumen.findMany()
     * 
     * // Get first 10 Dokumen
     * const dokumen = await prisma.dokumen.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dokumenWithIdOnly = await prisma.dokumen.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DokumenFindManyArgs>(args?: SelectSubset<T, DokumenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DokumenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dokumen.
     * @param {DokumenCreateArgs} args - Arguments to create a Dokumen.
     * @example
     * // Create one Dokumen
     * const Dokumen = await prisma.dokumen.create({
     *   data: {
     *     // ... data to create a Dokumen
     *   }
     * })
     * 
     */
    create<T extends DokumenCreateArgs>(args: SelectSubset<T, DokumenCreateArgs<ExtArgs>>): Prisma__DokumenClient<$Result.GetResult<Prisma.$DokumenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dokumen.
     * @param {DokumenCreateManyArgs} args - Arguments to create many Dokumen.
     * @example
     * // Create many Dokumen
     * const dokumen = await prisma.dokumen.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DokumenCreateManyArgs>(args?: SelectSubset<T, DokumenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Dokumen.
     * @param {DokumenDeleteArgs} args - Arguments to delete one Dokumen.
     * @example
     * // Delete one Dokumen
     * const Dokumen = await prisma.dokumen.delete({
     *   where: {
     *     // ... filter to delete one Dokumen
     *   }
     * })
     * 
     */
    delete<T extends DokumenDeleteArgs>(args: SelectSubset<T, DokumenDeleteArgs<ExtArgs>>): Prisma__DokumenClient<$Result.GetResult<Prisma.$DokumenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dokumen.
     * @param {DokumenUpdateArgs} args - Arguments to update one Dokumen.
     * @example
     * // Update one Dokumen
     * const dokumen = await prisma.dokumen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DokumenUpdateArgs>(args: SelectSubset<T, DokumenUpdateArgs<ExtArgs>>): Prisma__DokumenClient<$Result.GetResult<Prisma.$DokumenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dokumen.
     * @param {DokumenDeleteManyArgs} args - Arguments to filter Dokumen to delete.
     * @example
     * // Delete a few Dokumen
     * const { count } = await prisma.dokumen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DokumenDeleteManyArgs>(args?: SelectSubset<T, DokumenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dokumen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokumenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dokumen
     * const dokumen = await prisma.dokumen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DokumenUpdateManyArgs>(args: SelectSubset<T, DokumenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dokumen.
     * @param {DokumenUpsertArgs} args - Arguments to update or create a Dokumen.
     * @example
     * // Update or create a Dokumen
     * const dokumen = await prisma.dokumen.upsert({
     *   create: {
     *     // ... data to create a Dokumen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dokumen we want to update
     *   }
     * })
     */
    upsert<T extends DokumenUpsertArgs>(args: SelectSubset<T, DokumenUpsertArgs<ExtArgs>>): Prisma__DokumenClient<$Result.GetResult<Prisma.$DokumenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dokumen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokumenCountArgs} args - Arguments to filter Dokumen to count.
     * @example
     * // Count the number of Dokumen
     * const count = await prisma.dokumen.count({
     *   where: {
     *     // ... the filter for the Dokumen we want to count
     *   }
     * })
    **/
    count<T extends DokumenCountArgs>(
      args?: Subset<T, DokumenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DokumenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dokumen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokumenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DokumenAggregateArgs>(args: Subset<T, DokumenAggregateArgs>): Prisma.PrismaPromise<GetDokumenAggregateType<T>>

    /**
     * Group by Dokumen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokumenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DokumenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DokumenGroupByArgs['orderBy'] }
        : { orderBy?: DokumenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DokumenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDokumenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dokumen model
   */
  readonly fields: DokumenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dokumen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DokumenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dosen<T extends DosenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DosenDefaultArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Dokumen model
   */
  interface DokumenFieldRefs {
    readonly id: FieldRef<"Dokumen", 'Int'>
    readonly judul: FieldRef<"Dokumen", 'String'>
    readonly dokumenUrl: FieldRef<"Dokumen", 'String'>
    readonly dosenId: FieldRef<"Dokumen", 'Int'>
    readonly createdAt: FieldRef<"Dokumen", 'DateTime'>
    readonly updatedAt: FieldRef<"Dokumen", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Dokumen findUnique
   */
  export type DokumenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokumen
     */
    select?: DokumenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokumen
     */
    omit?: DokumenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenInclude<ExtArgs> | null
    /**
     * Filter, which Dokumen to fetch.
     */
    where: DokumenWhereUniqueInput
  }

  /**
   * Dokumen findUniqueOrThrow
   */
  export type DokumenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokumen
     */
    select?: DokumenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokumen
     */
    omit?: DokumenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenInclude<ExtArgs> | null
    /**
     * Filter, which Dokumen to fetch.
     */
    where: DokumenWhereUniqueInput
  }

  /**
   * Dokumen findFirst
   */
  export type DokumenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokumen
     */
    select?: DokumenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokumen
     */
    omit?: DokumenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenInclude<ExtArgs> | null
    /**
     * Filter, which Dokumen to fetch.
     */
    where?: DokumenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dokumen to fetch.
     */
    orderBy?: DokumenOrderByWithRelationInput | DokumenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dokumen.
     */
    cursor?: DokumenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dokumen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dokumen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dokumen.
     */
    distinct?: DokumenScalarFieldEnum | DokumenScalarFieldEnum[]
  }

  /**
   * Dokumen findFirstOrThrow
   */
  export type DokumenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokumen
     */
    select?: DokumenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokumen
     */
    omit?: DokumenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenInclude<ExtArgs> | null
    /**
     * Filter, which Dokumen to fetch.
     */
    where?: DokumenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dokumen to fetch.
     */
    orderBy?: DokumenOrderByWithRelationInput | DokumenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dokumen.
     */
    cursor?: DokumenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dokumen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dokumen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dokumen.
     */
    distinct?: DokumenScalarFieldEnum | DokumenScalarFieldEnum[]
  }

  /**
   * Dokumen findMany
   */
  export type DokumenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokumen
     */
    select?: DokumenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokumen
     */
    omit?: DokumenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenInclude<ExtArgs> | null
    /**
     * Filter, which Dokumen to fetch.
     */
    where?: DokumenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dokumen to fetch.
     */
    orderBy?: DokumenOrderByWithRelationInput | DokumenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dokumen.
     */
    cursor?: DokumenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dokumen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dokumen.
     */
    skip?: number
    distinct?: DokumenScalarFieldEnum | DokumenScalarFieldEnum[]
  }

  /**
   * Dokumen create
   */
  export type DokumenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokumen
     */
    select?: DokumenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokumen
     */
    omit?: DokumenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenInclude<ExtArgs> | null
    /**
     * The data needed to create a Dokumen.
     */
    data: XOR<DokumenCreateInput, DokumenUncheckedCreateInput>
  }

  /**
   * Dokumen createMany
   */
  export type DokumenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dokumen.
     */
    data: DokumenCreateManyInput | DokumenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dokumen update
   */
  export type DokumenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokumen
     */
    select?: DokumenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokumen
     */
    omit?: DokumenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenInclude<ExtArgs> | null
    /**
     * The data needed to update a Dokumen.
     */
    data: XOR<DokumenUpdateInput, DokumenUncheckedUpdateInput>
    /**
     * Choose, which Dokumen to update.
     */
    where: DokumenWhereUniqueInput
  }

  /**
   * Dokumen updateMany
   */
  export type DokumenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dokumen.
     */
    data: XOR<DokumenUpdateManyMutationInput, DokumenUncheckedUpdateManyInput>
    /**
     * Filter which Dokumen to update
     */
    where?: DokumenWhereInput
    /**
     * Limit how many Dokumen to update.
     */
    limit?: number
  }

  /**
   * Dokumen upsert
   */
  export type DokumenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokumen
     */
    select?: DokumenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokumen
     */
    omit?: DokumenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenInclude<ExtArgs> | null
    /**
     * The filter to search for the Dokumen to update in case it exists.
     */
    where: DokumenWhereUniqueInput
    /**
     * In case the Dokumen found by the `where` argument doesn't exist, create a new Dokumen with this data.
     */
    create: XOR<DokumenCreateInput, DokumenUncheckedCreateInput>
    /**
     * In case the Dokumen was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DokumenUpdateInput, DokumenUncheckedUpdateInput>
  }

  /**
   * Dokumen delete
   */
  export type DokumenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokumen
     */
    select?: DokumenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokumen
     */
    omit?: DokumenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenInclude<ExtArgs> | null
    /**
     * Filter which Dokumen to delete.
     */
    where: DokumenWhereUniqueInput
  }

  /**
   * Dokumen deleteMany
   */
  export type DokumenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dokumen to delete
     */
    where?: DokumenWhereInput
    /**
     * Limit how many Dokumen to delete.
     */
    limit?: number
  }

  /**
   * Dokumen without action
   */
  export type DokumenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokumen
     */
    select?: DokumenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokumen
     */
    omit?: DokumenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PeriodeScalarFieldEnum: {
    id: 'id',
    periode: 'periode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PeriodeScalarFieldEnum = (typeof PeriodeScalarFieldEnum)[keyof typeof PeriodeScalarFieldEnum]


  export const HomebaseScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HomebaseScalarFieldEnum = (typeof HomebaseScalarFieldEnum)[keyof typeof HomebaseScalarFieldEnum]


  export const KriteriaScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    bobot: 'bobot',
    deskripsi: 'deskripsi',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type KriteriaScalarFieldEnum = (typeof KriteriaScalarFieldEnum)[keyof typeof KriteriaScalarFieldEnum]


  export const DosenScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    nip: 'nip',
    jabatan: 'jabatan',
    homebaseId: 'homebaseId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DosenScalarFieldEnum = (typeof DosenScalarFieldEnum)[keyof typeof DosenScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    id: 'id',
    nilaiAkhir: 'nilaiAkhir',
    status: 'status',
    dosenId: 'dosenId',
    periodeId: 'periodeId',
    deskripsi: 'deskripsi',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const SubKriteriaScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    nilaiMaksimal: 'nilaiMaksimal',
    kriteriaId: 'kriteriaId',
    jenis: 'jenis',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubKriteriaScalarFieldEnum = (typeof SubKriteriaScalarFieldEnum)[keyof typeof SubKriteriaScalarFieldEnum]


  export const PenilaianScalarFieldEnum: {
    id: 'id',
    nilai: 'nilai',
    reportId: 'reportId',
    subKriteriaId: 'subKriteriaId',
    evaluatorId: 'evaluatorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PenilaianScalarFieldEnum = (typeof PenilaianScalarFieldEnum)[keyof typeof PenilaianScalarFieldEnum]


  export const DokumenScalarFieldEnum: {
    id: 'id',
    judul: 'judul',
    dokumenUrl: 'dokumenUrl',
    dosenId: 'dosenId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DokumenScalarFieldEnum = (typeof DokumenScalarFieldEnum)[keyof typeof DokumenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    username: 'username',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const PeriodeOrderByRelevanceFieldEnum: {
    periode: 'periode'
  };

  export type PeriodeOrderByRelevanceFieldEnum = (typeof PeriodeOrderByRelevanceFieldEnum)[keyof typeof PeriodeOrderByRelevanceFieldEnum]


  export const HomebaseOrderByRelevanceFieldEnum: {
    nama: 'nama'
  };

  export type HomebaseOrderByRelevanceFieldEnum = (typeof HomebaseOrderByRelevanceFieldEnum)[keyof typeof HomebaseOrderByRelevanceFieldEnum]


  export const KriteriaOrderByRelevanceFieldEnum: {
    nama: 'nama',
    deskripsi: 'deskripsi'
  };

  export type KriteriaOrderByRelevanceFieldEnum = (typeof KriteriaOrderByRelevanceFieldEnum)[keyof typeof KriteriaOrderByRelevanceFieldEnum]


  export const DosenOrderByRelevanceFieldEnum: {
    nama: 'nama',
    nip: 'nip'
  };

  export type DosenOrderByRelevanceFieldEnum = (typeof DosenOrderByRelevanceFieldEnum)[keyof typeof DosenOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ReportOrderByRelevanceFieldEnum: {
    deskripsi: 'deskripsi'
  };

  export type ReportOrderByRelevanceFieldEnum = (typeof ReportOrderByRelevanceFieldEnum)[keyof typeof ReportOrderByRelevanceFieldEnum]


  export const SubKriteriaOrderByRelevanceFieldEnum: {
    nama: 'nama'
  };

  export type SubKriteriaOrderByRelevanceFieldEnum = (typeof SubKriteriaOrderByRelevanceFieldEnum)[keyof typeof SubKriteriaOrderByRelevanceFieldEnum]


  export const DokumenOrderByRelevanceFieldEnum: {
    judul: 'judul',
    dokumenUrl: 'dokumenUrl'
  };

  export type DokumenOrderByRelevanceFieldEnum = (typeof DokumenOrderByRelevanceFieldEnum)[keyof typeof DokumenOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Jabatan'
   */
  export type EnumJabatanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Jabatan'>
    


  /**
   * Reference to a field of type 'ReportStatus'
   */
  export type EnumReportStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportStatus'>
    


  /**
   * Reference to a field of type 'JenisPenilaian'
   */
  export type EnumJenisPenilaianFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JenisPenilaian'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Penilaian?: PenilaianListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Penilaian?: PenilaianOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Penilaian?: PenilaianListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PeriodeWhereInput = {
    AND?: PeriodeWhereInput | PeriodeWhereInput[]
    OR?: PeriodeWhereInput[]
    NOT?: PeriodeWhereInput | PeriodeWhereInput[]
    id?: IntFilter<"Periode"> | number
    periode?: StringFilter<"Periode"> | string
    createdAt?: DateTimeFilter<"Periode"> | Date | string
    updatedAt?: DateTimeFilter<"Periode"> | Date | string
    Report?: ReportListRelationFilter
  }

  export type PeriodeOrderByWithRelationInput = {
    id?: SortOrder
    periode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Report?: ReportOrderByRelationAggregateInput
    _relevance?: PeriodeOrderByRelevanceInput
  }

  export type PeriodeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    periode?: string
    AND?: PeriodeWhereInput | PeriodeWhereInput[]
    OR?: PeriodeWhereInput[]
    NOT?: PeriodeWhereInput | PeriodeWhereInput[]
    createdAt?: DateTimeFilter<"Periode"> | Date | string
    updatedAt?: DateTimeFilter<"Periode"> | Date | string
    Report?: ReportListRelationFilter
  }, "id" | "periode">

  export type PeriodeOrderByWithAggregationInput = {
    id?: SortOrder
    periode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PeriodeCountOrderByAggregateInput
    _avg?: PeriodeAvgOrderByAggregateInput
    _max?: PeriodeMaxOrderByAggregateInput
    _min?: PeriodeMinOrderByAggregateInput
    _sum?: PeriodeSumOrderByAggregateInput
  }

  export type PeriodeScalarWhereWithAggregatesInput = {
    AND?: PeriodeScalarWhereWithAggregatesInput | PeriodeScalarWhereWithAggregatesInput[]
    OR?: PeriodeScalarWhereWithAggregatesInput[]
    NOT?: PeriodeScalarWhereWithAggregatesInput | PeriodeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Periode"> | number
    periode?: StringWithAggregatesFilter<"Periode"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Periode"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Periode"> | Date | string
  }

  export type HomebaseWhereInput = {
    AND?: HomebaseWhereInput | HomebaseWhereInput[]
    OR?: HomebaseWhereInput[]
    NOT?: HomebaseWhereInput | HomebaseWhereInput[]
    id?: IntFilter<"Homebase"> | number
    nama?: StringFilter<"Homebase"> | string
    createdAt?: DateTimeFilter<"Homebase"> | Date | string
    updatedAt?: DateTimeFilter<"Homebase"> | Date | string
    Dosen?: DosenListRelationFilter
  }

  export type HomebaseOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Dosen?: DosenOrderByRelationAggregateInput
    _relevance?: HomebaseOrderByRelevanceInput
  }

  export type HomebaseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nama?: string
    AND?: HomebaseWhereInput | HomebaseWhereInput[]
    OR?: HomebaseWhereInput[]
    NOT?: HomebaseWhereInput | HomebaseWhereInput[]
    createdAt?: DateTimeFilter<"Homebase"> | Date | string
    updatedAt?: DateTimeFilter<"Homebase"> | Date | string
    Dosen?: DosenListRelationFilter
  }, "id" | "nama">

  export type HomebaseOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HomebaseCountOrderByAggregateInput
    _avg?: HomebaseAvgOrderByAggregateInput
    _max?: HomebaseMaxOrderByAggregateInput
    _min?: HomebaseMinOrderByAggregateInput
    _sum?: HomebaseSumOrderByAggregateInput
  }

  export type HomebaseScalarWhereWithAggregatesInput = {
    AND?: HomebaseScalarWhereWithAggregatesInput | HomebaseScalarWhereWithAggregatesInput[]
    OR?: HomebaseScalarWhereWithAggregatesInput[]
    NOT?: HomebaseScalarWhereWithAggregatesInput | HomebaseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Homebase"> | number
    nama?: StringWithAggregatesFilter<"Homebase"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Homebase"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Homebase"> | Date | string
  }

  export type KriteriaWhereInput = {
    AND?: KriteriaWhereInput | KriteriaWhereInput[]
    OR?: KriteriaWhereInput[]
    NOT?: KriteriaWhereInput | KriteriaWhereInput[]
    id?: IntFilter<"Kriteria"> | number
    nama?: StringFilter<"Kriteria"> | string
    bobot?: FloatFilter<"Kriteria"> | number
    deskripsi?: StringFilter<"Kriteria"> | string
    createdAt?: DateTimeFilter<"Kriteria"> | Date | string
    updatedAt?: DateTimeFilter<"Kriteria"> | Date | string
    SubKriteria?: SubKriteriaListRelationFilter
  }

  export type KriteriaOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    bobot?: SortOrder
    deskripsi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    SubKriteria?: SubKriteriaOrderByRelationAggregateInput
    _relevance?: KriteriaOrderByRelevanceInput
  }

  export type KriteriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nama?: string
    AND?: KriteriaWhereInput | KriteriaWhereInput[]
    OR?: KriteriaWhereInput[]
    NOT?: KriteriaWhereInput | KriteriaWhereInput[]
    bobot?: FloatFilter<"Kriteria"> | number
    deskripsi?: StringFilter<"Kriteria"> | string
    createdAt?: DateTimeFilter<"Kriteria"> | Date | string
    updatedAt?: DateTimeFilter<"Kriteria"> | Date | string
    SubKriteria?: SubKriteriaListRelationFilter
  }, "id" | "nama">

  export type KriteriaOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    bobot?: SortOrder
    deskripsi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: KriteriaCountOrderByAggregateInput
    _avg?: KriteriaAvgOrderByAggregateInput
    _max?: KriteriaMaxOrderByAggregateInput
    _min?: KriteriaMinOrderByAggregateInput
    _sum?: KriteriaSumOrderByAggregateInput
  }

  export type KriteriaScalarWhereWithAggregatesInput = {
    AND?: KriteriaScalarWhereWithAggregatesInput | KriteriaScalarWhereWithAggregatesInput[]
    OR?: KriteriaScalarWhereWithAggregatesInput[]
    NOT?: KriteriaScalarWhereWithAggregatesInput | KriteriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Kriteria"> | number
    nama?: StringWithAggregatesFilter<"Kriteria"> | string
    bobot?: FloatWithAggregatesFilter<"Kriteria"> | number
    deskripsi?: StringWithAggregatesFilter<"Kriteria"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Kriteria"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Kriteria"> | Date | string
  }

  export type DosenWhereInput = {
    AND?: DosenWhereInput | DosenWhereInput[]
    OR?: DosenWhereInput[]
    NOT?: DosenWhereInput | DosenWhereInput[]
    id?: IntFilter<"Dosen"> | number
    nama?: StringFilter<"Dosen"> | string
    nip?: StringFilter<"Dosen"> | string
    jabatan?: EnumJabatanFilter<"Dosen"> | $Enums.Jabatan
    homebaseId?: IntFilter<"Dosen"> | number
    createdAt?: DateTimeFilter<"Dosen"> | Date | string
    updatedAt?: DateTimeFilter<"Dosen"> | Date | string
    homebase?: XOR<HomebaseScalarRelationFilter, HomebaseWhereInput>
    Report?: ReportListRelationFilter
    Dokumen?: DokumenListRelationFilter
  }

  export type DosenOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    nip?: SortOrder
    jabatan?: SortOrder
    homebaseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    homebase?: HomebaseOrderByWithRelationInput
    Report?: ReportOrderByRelationAggregateInput
    Dokumen?: DokumenOrderByRelationAggregateInput
    _relevance?: DosenOrderByRelevanceInput
  }

  export type DosenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nip?: string
    AND?: DosenWhereInput | DosenWhereInput[]
    OR?: DosenWhereInput[]
    NOT?: DosenWhereInput | DosenWhereInput[]
    nama?: StringFilter<"Dosen"> | string
    jabatan?: EnumJabatanFilter<"Dosen"> | $Enums.Jabatan
    homebaseId?: IntFilter<"Dosen"> | number
    createdAt?: DateTimeFilter<"Dosen"> | Date | string
    updatedAt?: DateTimeFilter<"Dosen"> | Date | string
    homebase?: XOR<HomebaseScalarRelationFilter, HomebaseWhereInput>
    Report?: ReportListRelationFilter
    Dokumen?: DokumenListRelationFilter
  }, "id" | "nip">

  export type DosenOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    nip?: SortOrder
    jabatan?: SortOrder
    homebaseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DosenCountOrderByAggregateInput
    _avg?: DosenAvgOrderByAggregateInput
    _max?: DosenMaxOrderByAggregateInput
    _min?: DosenMinOrderByAggregateInput
    _sum?: DosenSumOrderByAggregateInput
  }

  export type DosenScalarWhereWithAggregatesInput = {
    AND?: DosenScalarWhereWithAggregatesInput | DosenScalarWhereWithAggregatesInput[]
    OR?: DosenScalarWhereWithAggregatesInput[]
    NOT?: DosenScalarWhereWithAggregatesInput | DosenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Dosen"> | number
    nama?: StringWithAggregatesFilter<"Dosen"> | string
    nip?: StringWithAggregatesFilter<"Dosen"> | string
    jabatan?: EnumJabatanWithAggregatesFilter<"Dosen"> | $Enums.Jabatan
    homebaseId?: IntWithAggregatesFilter<"Dosen"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Dosen"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Dosen"> | Date | string
  }

  export type ReportWhereInput = {
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    id?: IntFilter<"Report"> | number
    nilaiAkhir?: FloatNullableFilter<"Report"> | number | null
    status?: EnumReportStatusFilter<"Report"> | $Enums.ReportStatus
    dosenId?: IntFilter<"Report"> | number
    periodeId?: IntFilter<"Report"> | number
    deskripsi?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    updatedAt?: DateTimeFilter<"Report"> | Date | string
    dosen?: XOR<DosenScalarRelationFilter, DosenWhereInput>
    periode?: XOR<PeriodeScalarRelationFilter, PeriodeWhereInput>
    Penilaian?: PenilaianListRelationFilter
  }

  export type ReportOrderByWithRelationInput = {
    id?: SortOrder
    nilaiAkhir?: SortOrderInput | SortOrder
    status?: SortOrder
    dosenId?: SortOrder
    periodeId?: SortOrder
    deskripsi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dosen?: DosenOrderByWithRelationInput
    periode?: PeriodeOrderByWithRelationInput
    Penilaian?: PenilaianOrderByRelationAggregateInput
    _relevance?: ReportOrderByRelevanceInput
  }

  export type ReportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    nilaiAkhir?: FloatNullableFilter<"Report"> | number | null
    status?: EnumReportStatusFilter<"Report"> | $Enums.ReportStatus
    dosenId?: IntFilter<"Report"> | number
    periodeId?: IntFilter<"Report"> | number
    deskripsi?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    updatedAt?: DateTimeFilter<"Report"> | Date | string
    dosen?: XOR<DosenScalarRelationFilter, DosenWhereInput>
    periode?: XOR<PeriodeScalarRelationFilter, PeriodeWhereInput>
    Penilaian?: PenilaianListRelationFilter
  }, "id">

  export type ReportOrderByWithAggregationInput = {
    id?: SortOrder
    nilaiAkhir?: SortOrderInput | SortOrder
    status?: SortOrder
    dosenId?: SortOrder
    periodeId?: SortOrder
    deskripsi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReportCountOrderByAggregateInput
    _avg?: ReportAvgOrderByAggregateInput
    _max?: ReportMaxOrderByAggregateInput
    _min?: ReportMinOrderByAggregateInput
    _sum?: ReportSumOrderByAggregateInput
  }

  export type ReportScalarWhereWithAggregatesInput = {
    AND?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    OR?: ReportScalarWhereWithAggregatesInput[]
    NOT?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Report"> | number
    nilaiAkhir?: FloatNullableWithAggregatesFilter<"Report"> | number | null
    status?: EnumReportStatusWithAggregatesFilter<"Report"> | $Enums.ReportStatus
    dosenId?: IntWithAggregatesFilter<"Report"> | number
    periodeId?: IntWithAggregatesFilter<"Report"> | number
    deskripsi?: StringWithAggregatesFilter<"Report"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
  }

  export type SubKriteriaWhereInput = {
    AND?: SubKriteriaWhereInput | SubKriteriaWhereInput[]
    OR?: SubKriteriaWhereInput[]
    NOT?: SubKriteriaWhereInput | SubKriteriaWhereInput[]
    id?: IntFilter<"SubKriteria"> | number
    nama?: StringFilter<"SubKriteria"> | string
    nilaiMaksimal?: IntFilter<"SubKriteria"> | number
    kriteriaId?: IntFilter<"SubKriteria"> | number
    jenis?: EnumJenisPenilaianFilter<"SubKriteria"> | $Enums.JenisPenilaian
    createdAt?: DateTimeFilter<"SubKriteria"> | Date | string
    updatedAt?: DateTimeFilter<"SubKriteria"> | Date | string
    kriteria?: XOR<KriteriaScalarRelationFilter, KriteriaWhereInput>
    Penilaian?: PenilaianListRelationFilter
  }

  export type SubKriteriaOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    nilaiMaksimal?: SortOrder
    kriteriaId?: SortOrder
    jenis?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    kriteria?: KriteriaOrderByWithRelationInput
    Penilaian?: PenilaianOrderByRelationAggregateInput
    _relevance?: SubKriteriaOrderByRelevanceInput
  }

  export type SubKriteriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SubKriteriaWhereInput | SubKriteriaWhereInput[]
    OR?: SubKriteriaWhereInput[]
    NOT?: SubKriteriaWhereInput | SubKriteriaWhereInput[]
    nama?: StringFilter<"SubKriteria"> | string
    nilaiMaksimal?: IntFilter<"SubKriteria"> | number
    kriteriaId?: IntFilter<"SubKriteria"> | number
    jenis?: EnumJenisPenilaianFilter<"SubKriteria"> | $Enums.JenisPenilaian
    createdAt?: DateTimeFilter<"SubKriteria"> | Date | string
    updatedAt?: DateTimeFilter<"SubKriteria"> | Date | string
    kriteria?: XOR<KriteriaScalarRelationFilter, KriteriaWhereInput>
    Penilaian?: PenilaianListRelationFilter
  }, "id">

  export type SubKriteriaOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    nilaiMaksimal?: SortOrder
    kriteriaId?: SortOrder
    jenis?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubKriteriaCountOrderByAggregateInput
    _avg?: SubKriteriaAvgOrderByAggregateInput
    _max?: SubKriteriaMaxOrderByAggregateInput
    _min?: SubKriteriaMinOrderByAggregateInput
    _sum?: SubKriteriaSumOrderByAggregateInput
  }

  export type SubKriteriaScalarWhereWithAggregatesInput = {
    AND?: SubKriteriaScalarWhereWithAggregatesInput | SubKriteriaScalarWhereWithAggregatesInput[]
    OR?: SubKriteriaScalarWhereWithAggregatesInput[]
    NOT?: SubKriteriaScalarWhereWithAggregatesInput | SubKriteriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SubKriteria"> | number
    nama?: StringWithAggregatesFilter<"SubKriteria"> | string
    nilaiMaksimal?: IntWithAggregatesFilter<"SubKriteria"> | number
    kriteriaId?: IntWithAggregatesFilter<"SubKriteria"> | number
    jenis?: EnumJenisPenilaianWithAggregatesFilter<"SubKriteria"> | $Enums.JenisPenilaian
    createdAt?: DateTimeWithAggregatesFilter<"SubKriteria"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SubKriteria"> | Date | string
  }

  export type PenilaianWhereInput = {
    AND?: PenilaianWhereInput | PenilaianWhereInput[]
    OR?: PenilaianWhereInput[]
    NOT?: PenilaianWhereInput | PenilaianWhereInput[]
    id?: IntFilter<"Penilaian"> | number
    nilai?: FloatFilter<"Penilaian"> | number
    reportId?: IntFilter<"Penilaian"> | number
    subKriteriaId?: IntFilter<"Penilaian"> | number
    evaluatorId?: IntFilter<"Penilaian"> | number
    createdAt?: DateTimeFilter<"Penilaian"> | Date | string
    updatedAt?: DateTimeFilter<"Penilaian"> | Date | string
    report?: XOR<ReportScalarRelationFilter, ReportWhereInput>
    subKriteria?: XOR<SubKriteriaScalarRelationFilter, SubKriteriaWhereInput>
    evaluator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PenilaianOrderByWithRelationInput = {
    id?: SortOrder
    nilai?: SortOrder
    reportId?: SortOrder
    subKriteriaId?: SortOrder
    evaluatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    report?: ReportOrderByWithRelationInput
    subKriteria?: SubKriteriaOrderByWithRelationInput
    evaluator?: UserOrderByWithRelationInput
  }

  export type PenilaianWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PenilaianWhereInput | PenilaianWhereInput[]
    OR?: PenilaianWhereInput[]
    NOT?: PenilaianWhereInput | PenilaianWhereInput[]
    nilai?: FloatFilter<"Penilaian"> | number
    reportId?: IntFilter<"Penilaian"> | number
    subKriteriaId?: IntFilter<"Penilaian"> | number
    evaluatorId?: IntFilter<"Penilaian"> | number
    createdAt?: DateTimeFilter<"Penilaian"> | Date | string
    updatedAt?: DateTimeFilter<"Penilaian"> | Date | string
    report?: XOR<ReportScalarRelationFilter, ReportWhereInput>
    subKriteria?: XOR<SubKriteriaScalarRelationFilter, SubKriteriaWhereInput>
    evaluator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PenilaianOrderByWithAggregationInput = {
    id?: SortOrder
    nilai?: SortOrder
    reportId?: SortOrder
    subKriteriaId?: SortOrder
    evaluatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PenilaianCountOrderByAggregateInput
    _avg?: PenilaianAvgOrderByAggregateInput
    _max?: PenilaianMaxOrderByAggregateInput
    _min?: PenilaianMinOrderByAggregateInput
    _sum?: PenilaianSumOrderByAggregateInput
  }

  export type PenilaianScalarWhereWithAggregatesInput = {
    AND?: PenilaianScalarWhereWithAggregatesInput | PenilaianScalarWhereWithAggregatesInput[]
    OR?: PenilaianScalarWhereWithAggregatesInput[]
    NOT?: PenilaianScalarWhereWithAggregatesInput | PenilaianScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Penilaian"> | number
    nilai?: FloatWithAggregatesFilter<"Penilaian"> | number
    reportId?: IntWithAggregatesFilter<"Penilaian"> | number
    subKriteriaId?: IntWithAggregatesFilter<"Penilaian"> | number
    evaluatorId?: IntWithAggregatesFilter<"Penilaian"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Penilaian"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Penilaian"> | Date | string
  }

  export type DokumenWhereInput = {
    AND?: DokumenWhereInput | DokumenWhereInput[]
    OR?: DokumenWhereInput[]
    NOT?: DokumenWhereInput | DokumenWhereInput[]
    id?: IntFilter<"Dokumen"> | number
    judul?: StringFilter<"Dokumen"> | string
    dokumenUrl?: StringFilter<"Dokumen"> | string
    dosenId?: IntFilter<"Dokumen"> | number
    createdAt?: DateTimeFilter<"Dokumen"> | Date | string
    updatedAt?: DateTimeFilter<"Dokumen"> | Date | string
    dosen?: XOR<DosenScalarRelationFilter, DosenWhereInput>
  }

  export type DokumenOrderByWithRelationInput = {
    id?: SortOrder
    judul?: SortOrder
    dokumenUrl?: SortOrder
    dosenId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dosen?: DosenOrderByWithRelationInput
    _relevance?: DokumenOrderByRelevanceInput
  }

  export type DokumenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DokumenWhereInput | DokumenWhereInput[]
    OR?: DokumenWhereInput[]
    NOT?: DokumenWhereInput | DokumenWhereInput[]
    judul?: StringFilter<"Dokumen"> | string
    dokumenUrl?: StringFilter<"Dokumen"> | string
    dosenId?: IntFilter<"Dokumen"> | number
    createdAt?: DateTimeFilter<"Dokumen"> | Date | string
    updatedAt?: DateTimeFilter<"Dokumen"> | Date | string
    dosen?: XOR<DosenScalarRelationFilter, DosenWhereInput>
  }, "id">

  export type DokumenOrderByWithAggregationInput = {
    id?: SortOrder
    judul?: SortOrder
    dokumenUrl?: SortOrder
    dosenId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DokumenCountOrderByAggregateInput
    _avg?: DokumenAvgOrderByAggregateInput
    _max?: DokumenMaxOrderByAggregateInput
    _min?: DokumenMinOrderByAggregateInput
    _sum?: DokumenSumOrderByAggregateInput
  }

  export type DokumenScalarWhereWithAggregatesInput = {
    AND?: DokumenScalarWhereWithAggregatesInput | DokumenScalarWhereWithAggregatesInput[]
    OR?: DokumenScalarWhereWithAggregatesInput[]
    NOT?: DokumenScalarWhereWithAggregatesInput | DokumenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Dokumen"> | number
    judul?: StringWithAggregatesFilter<"Dokumen"> | string
    dokumenUrl?: StringWithAggregatesFilter<"Dokumen"> | string
    dosenId?: IntWithAggregatesFilter<"Dokumen"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Dokumen"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Dokumen"> | Date | string
  }

  export type UserCreateInput = {
    username: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    Penilaian?: PenilaianCreateNestedManyWithoutEvaluatorInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    Penilaian?: PenilaianUncheckedCreateNestedManyWithoutEvaluatorInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Penilaian?: PenilaianUpdateManyWithoutEvaluatorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Penilaian?: PenilaianUncheckedUpdateManyWithoutEvaluatorNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeriodeCreateInput = {
    periode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Report?: ReportCreateNestedManyWithoutPeriodeInput
  }

  export type PeriodeUncheckedCreateInput = {
    id?: number
    periode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Report?: ReportUncheckedCreateNestedManyWithoutPeriodeInput
  }

  export type PeriodeUpdateInput = {
    periode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Report?: ReportUpdateManyWithoutPeriodeNestedInput
  }

  export type PeriodeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    periode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Report?: ReportUncheckedUpdateManyWithoutPeriodeNestedInput
  }

  export type PeriodeCreateManyInput = {
    id?: number
    periode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PeriodeUpdateManyMutationInput = {
    periode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeriodeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    periode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomebaseCreateInput = {
    nama: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Dosen?: DosenCreateNestedManyWithoutHomebaseInput
  }

  export type HomebaseUncheckedCreateInput = {
    id?: number
    nama: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Dosen?: DosenUncheckedCreateNestedManyWithoutHomebaseInput
  }

  export type HomebaseUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Dosen?: DosenUpdateManyWithoutHomebaseNestedInput
  }

  export type HomebaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Dosen?: DosenUncheckedUpdateManyWithoutHomebaseNestedInput
  }

  export type HomebaseCreateManyInput = {
    id?: number
    nama: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomebaseUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomebaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KriteriaCreateInput = {
    nama: string
    bobot: number
    deskripsi: string
    createdAt?: Date | string
    updatedAt?: Date | string
    SubKriteria?: SubKriteriaCreateNestedManyWithoutKriteriaInput
  }

  export type KriteriaUncheckedCreateInput = {
    id?: number
    nama: string
    bobot: number
    deskripsi: string
    createdAt?: Date | string
    updatedAt?: Date | string
    SubKriteria?: SubKriteriaUncheckedCreateNestedManyWithoutKriteriaInput
  }

  export type KriteriaUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    bobot?: FloatFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SubKriteria?: SubKriteriaUpdateManyWithoutKriteriaNestedInput
  }

  export type KriteriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    bobot?: FloatFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SubKriteria?: SubKriteriaUncheckedUpdateManyWithoutKriteriaNestedInput
  }

  export type KriteriaCreateManyInput = {
    id?: number
    nama: string
    bobot: number
    deskripsi: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KriteriaUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    bobot?: FloatFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KriteriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    bobot?: FloatFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DosenCreateInput = {
    nama: string
    nip: string
    jabatan: $Enums.Jabatan
    createdAt?: Date | string
    updatedAt?: Date | string
    homebase: HomebaseCreateNestedOneWithoutDosenInput
    Report?: ReportCreateNestedManyWithoutDosenInput
    Dokumen?: DokumenCreateNestedManyWithoutDosenInput
  }

  export type DosenUncheckedCreateInput = {
    id?: number
    nama: string
    nip: string
    jabatan: $Enums.Jabatan
    homebaseId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Report?: ReportUncheckedCreateNestedManyWithoutDosenInput
    Dokumen?: DokumenUncheckedCreateNestedManyWithoutDosenInput
  }

  export type DosenUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    jabatan?: EnumJabatanFieldUpdateOperationsInput | $Enums.Jabatan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    homebase?: HomebaseUpdateOneRequiredWithoutDosenNestedInput
    Report?: ReportUpdateManyWithoutDosenNestedInput
    Dokumen?: DokumenUpdateManyWithoutDosenNestedInput
  }

  export type DosenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    jabatan?: EnumJabatanFieldUpdateOperationsInput | $Enums.Jabatan
    homebaseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Report?: ReportUncheckedUpdateManyWithoutDosenNestedInput
    Dokumen?: DokumenUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type DosenCreateManyInput = {
    id?: number
    nama: string
    nip: string
    jabatan: $Enums.Jabatan
    homebaseId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DosenUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    jabatan?: EnumJabatanFieldUpdateOperationsInput | $Enums.Jabatan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DosenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    jabatan?: EnumJabatanFieldUpdateOperationsInput | $Enums.Jabatan
    homebaseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateInput = {
    nilaiAkhir?: number | null
    status: $Enums.ReportStatus
    deskripsi: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dosen: DosenCreateNestedOneWithoutReportInput
    periode: PeriodeCreateNestedOneWithoutReportInput
    Penilaian?: PenilaianCreateNestedManyWithoutReportInput
  }

  export type ReportUncheckedCreateInput = {
    id?: number
    nilaiAkhir?: number | null
    status: $Enums.ReportStatus
    dosenId: number
    periodeId: number
    deskripsi: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Penilaian?: PenilaianUncheckedCreateNestedManyWithoutReportInput
  }

  export type ReportUpdateInput = {
    nilaiAkhir?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    deskripsi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dosen?: DosenUpdateOneRequiredWithoutReportNestedInput
    periode?: PeriodeUpdateOneRequiredWithoutReportNestedInput
    Penilaian?: PenilaianUpdateManyWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nilaiAkhir?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    dosenId?: IntFieldUpdateOperationsInput | number
    periodeId?: IntFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Penilaian?: PenilaianUncheckedUpdateManyWithoutReportNestedInput
  }

  export type ReportCreateManyInput = {
    id?: number
    nilaiAkhir?: number | null
    status: $Enums.ReportStatus
    dosenId: number
    periodeId: number
    deskripsi: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportUpdateManyMutationInput = {
    nilaiAkhir?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    deskripsi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nilaiAkhir?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    dosenId?: IntFieldUpdateOperationsInput | number
    periodeId?: IntFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubKriteriaCreateInput = {
    nama: string
    nilaiMaksimal: number
    jenis: $Enums.JenisPenilaian
    createdAt?: Date | string
    updatedAt?: Date | string
    kriteria: KriteriaCreateNestedOneWithoutSubKriteriaInput
    Penilaian?: PenilaianCreateNestedManyWithoutSubKriteriaInput
  }

  export type SubKriteriaUncheckedCreateInput = {
    id?: number
    nama: string
    nilaiMaksimal: number
    kriteriaId: number
    jenis: $Enums.JenisPenilaian
    createdAt?: Date | string
    updatedAt?: Date | string
    Penilaian?: PenilaianUncheckedCreateNestedManyWithoutSubKriteriaInput
  }

  export type SubKriteriaUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    nilaiMaksimal?: IntFieldUpdateOperationsInput | number
    jenis?: EnumJenisPenilaianFieldUpdateOperationsInput | $Enums.JenisPenilaian
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kriteria?: KriteriaUpdateOneRequiredWithoutSubKriteriaNestedInput
    Penilaian?: PenilaianUpdateManyWithoutSubKriteriaNestedInput
  }

  export type SubKriteriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    nilaiMaksimal?: IntFieldUpdateOperationsInput | number
    kriteriaId?: IntFieldUpdateOperationsInput | number
    jenis?: EnumJenisPenilaianFieldUpdateOperationsInput | $Enums.JenisPenilaian
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Penilaian?: PenilaianUncheckedUpdateManyWithoutSubKriteriaNestedInput
  }

  export type SubKriteriaCreateManyInput = {
    id?: number
    nama: string
    nilaiMaksimal: number
    kriteriaId: number
    jenis: $Enums.JenisPenilaian
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubKriteriaUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    nilaiMaksimal?: IntFieldUpdateOperationsInput | number
    jenis?: EnumJenisPenilaianFieldUpdateOperationsInput | $Enums.JenisPenilaian
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubKriteriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    nilaiMaksimal?: IntFieldUpdateOperationsInput | number
    kriteriaId?: IntFieldUpdateOperationsInput | number
    jenis?: EnumJenisPenilaianFieldUpdateOperationsInput | $Enums.JenisPenilaian
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PenilaianCreateInput = {
    nilai: number
    createdAt?: Date | string
    updatedAt?: Date | string
    report: ReportCreateNestedOneWithoutPenilaianInput
    subKriteria: SubKriteriaCreateNestedOneWithoutPenilaianInput
    evaluator: UserCreateNestedOneWithoutPenilaianInput
  }

  export type PenilaianUncheckedCreateInput = {
    id?: number
    nilai: number
    reportId: number
    subKriteriaId: number
    evaluatorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PenilaianUpdateInput = {
    nilai?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    report?: ReportUpdateOneRequiredWithoutPenilaianNestedInput
    subKriteria?: SubKriteriaUpdateOneRequiredWithoutPenilaianNestedInput
    evaluator?: UserUpdateOneRequiredWithoutPenilaianNestedInput
  }

  export type PenilaianUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nilai?: FloatFieldUpdateOperationsInput | number
    reportId?: IntFieldUpdateOperationsInput | number
    subKriteriaId?: IntFieldUpdateOperationsInput | number
    evaluatorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PenilaianCreateManyInput = {
    id?: number
    nilai: number
    reportId: number
    subKriteriaId: number
    evaluatorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PenilaianUpdateManyMutationInput = {
    nilai?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PenilaianUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nilai?: FloatFieldUpdateOperationsInput | number
    reportId?: IntFieldUpdateOperationsInput | number
    subKriteriaId?: IntFieldUpdateOperationsInput | number
    evaluatorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DokumenCreateInput = {
    judul: string
    dokumenUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dosen: DosenCreateNestedOneWithoutDokumenInput
  }

  export type DokumenUncheckedCreateInput = {
    id?: number
    judul: string
    dokumenUrl: string
    dosenId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DokumenUpdateInput = {
    judul?: StringFieldUpdateOperationsInput | string
    dokumenUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dosen?: DosenUpdateOneRequiredWithoutDokumenNestedInput
  }

  export type DokumenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    dokumenUrl?: StringFieldUpdateOperationsInput | string
    dosenId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DokumenCreateManyInput = {
    id?: number
    judul: string
    dokumenUrl: string
    dosenId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DokumenUpdateManyMutationInput = {
    judul?: StringFieldUpdateOperationsInput | string
    dokumenUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DokumenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    dokumenUrl?: StringFieldUpdateOperationsInput | string
    dosenId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PenilaianListRelationFilter = {
    every?: PenilaianWhereInput
    some?: PenilaianWhereInput
    none?: PenilaianWhereInput
  }

  export type PenilaianOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ReportListRelationFilter = {
    every?: ReportWhereInput
    some?: ReportWhereInput
    none?: ReportWhereInput
  }

  export type ReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PeriodeOrderByRelevanceInput = {
    fields: PeriodeOrderByRelevanceFieldEnum | PeriodeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PeriodeCountOrderByAggregateInput = {
    id?: SortOrder
    periode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PeriodeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PeriodeMaxOrderByAggregateInput = {
    id?: SortOrder
    periode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PeriodeMinOrderByAggregateInput = {
    id?: SortOrder
    periode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PeriodeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DosenListRelationFilter = {
    every?: DosenWhereInput
    some?: DosenWhereInput
    none?: DosenWhereInput
  }

  export type DosenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HomebaseOrderByRelevanceInput = {
    fields: HomebaseOrderByRelevanceFieldEnum | HomebaseOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HomebaseCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomebaseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HomebaseMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomebaseMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomebaseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SubKriteriaListRelationFilter = {
    every?: SubKriteriaWhereInput
    some?: SubKriteriaWhereInput
    none?: SubKriteriaWhereInput
  }

  export type SubKriteriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KriteriaOrderByRelevanceInput = {
    fields: KriteriaOrderByRelevanceFieldEnum | KriteriaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type KriteriaCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    bobot?: SortOrder
    deskripsi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KriteriaAvgOrderByAggregateInput = {
    id?: SortOrder
    bobot?: SortOrder
  }

  export type KriteriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    bobot?: SortOrder
    deskripsi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KriteriaMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    bobot?: SortOrder
    deskripsi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KriteriaSumOrderByAggregateInput = {
    id?: SortOrder
    bobot?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumJabatanFilter<$PrismaModel = never> = {
    equals?: $Enums.Jabatan | EnumJabatanFieldRefInput<$PrismaModel>
    in?: $Enums.Jabatan[]
    notIn?: $Enums.Jabatan[]
    not?: NestedEnumJabatanFilter<$PrismaModel> | $Enums.Jabatan
  }

  export type HomebaseScalarRelationFilter = {
    is?: HomebaseWhereInput
    isNot?: HomebaseWhereInput
  }

  export type DokumenListRelationFilter = {
    every?: DokumenWhereInput
    some?: DokumenWhereInput
    none?: DokumenWhereInput
  }

  export type DokumenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DosenOrderByRelevanceInput = {
    fields: DosenOrderByRelevanceFieldEnum | DosenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DosenCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    nip?: SortOrder
    jabatan?: SortOrder
    homebaseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DosenAvgOrderByAggregateInput = {
    id?: SortOrder
    homebaseId?: SortOrder
  }

  export type DosenMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    nip?: SortOrder
    jabatan?: SortOrder
    homebaseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DosenMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    nip?: SortOrder
    jabatan?: SortOrder
    homebaseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DosenSumOrderByAggregateInput = {
    id?: SortOrder
    homebaseId?: SortOrder
  }

  export type EnumJabatanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Jabatan | EnumJabatanFieldRefInput<$PrismaModel>
    in?: $Enums.Jabatan[]
    notIn?: $Enums.Jabatan[]
    not?: NestedEnumJabatanWithAggregatesFilter<$PrismaModel> | $Enums.Jabatan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJabatanFilter<$PrismaModel>
    _max?: NestedEnumJabatanFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumReportStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[]
    notIn?: $Enums.ReportStatus[]
    not?: NestedEnumReportStatusFilter<$PrismaModel> | $Enums.ReportStatus
  }

  export type DosenScalarRelationFilter = {
    is?: DosenWhereInput
    isNot?: DosenWhereInput
  }

  export type PeriodeScalarRelationFilter = {
    is?: PeriodeWhereInput
    isNot?: PeriodeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReportOrderByRelevanceInput = {
    fields: ReportOrderByRelevanceFieldEnum | ReportOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReportCountOrderByAggregateInput = {
    id?: SortOrder
    nilaiAkhir?: SortOrder
    status?: SortOrder
    dosenId?: SortOrder
    periodeId?: SortOrder
    deskripsi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportAvgOrderByAggregateInput = {
    id?: SortOrder
    nilaiAkhir?: SortOrder
    dosenId?: SortOrder
    periodeId?: SortOrder
  }

  export type ReportMaxOrderByAggregateInput = {
    id?: SortOrder
    nilaiAkhir?: SortOrder
    status?: SortOrder
    dosenId?: SortOrder
    periodeId?: SortOrder
    deskripsi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportMinOrderByAggregateInput = {
    id?: SortOrder
    nilaiAkhir?: SortOrder
    status?: SortOrder
    dosenId?: SortOrder
    periodeId?: SortOrder
    deskripsi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportSumOrderByAggregateInput = {
    id?: SortOrder
    nilaiAkhir?: SortOrder
    dosenId?: SortOrder
    periodeId?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumReportStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[]
    notIn?: $Enums.ReportStatus[]
    not?: NestedEnumReportStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReportStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportStatusFilter<$PrismaModel>
    _max?: NestedEnumReportStatusFilter<$PrismaModel>
  }

  export type EnumJenisPenilaianFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisPenilaian | EnumJenisPenilaianFieldRefInput<$PrismaModel>
    in?: $Enums.JenisPenilaian[]
    notIn?: $Enums.JenisPenilaian[]
    not?: NestedEnumJenisPenilaianFilter<$PrismaModel> | $Enums.JenisPenilaian
  }

  export type KriteriaScalarRelationFilter = {
    is?: KriteriaWhereInput
    isNot?: KriteriaWhereInput
  }

  export type SubKriteriaOrderByRelevanceInput = {
    fields: SubKriteriaOrderByRelevanceFieldEnum | SubKriteriaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SubKriteriaCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    nilaiMaksimal?: SortOrder
    kriteriaId?: SortOrder
    jenis?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubKriteriaAvgOrderByAggregateInput = {
    id?: SortOrder
    nilaiMaksimal?: SortOrder
    kriteriaId?: SortOrder
  }

  export type SubKriteriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    nilaiMaksimal?: SortOrder
    kriteriaId?: SortOrder
    jenis?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubKriteriaMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    nilaiMaksimal?: SortOrder
    kriteriaId?: SortOrder
    jenis?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubKriteriaSumOrderByAggregateInput = {
    id?: SortOrder
    nilaiMaksimal?: SortOrder
    kriteriaId?: SortOrder
  }

  export type EnumJenisPenilaianWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisPenilaian | EnumJenisPenilaianFieldRefInput<$PrismaModel>
    in?: $Enums.JenisPenilaian[]
    notIn?: $Enums.JenisPenilaian[]
    not?: NestedEnumJenisPenilaianWithAggregatesFilter<$PrismaModel> | $Enums.JenisPenilaian
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisPenilaianFilter<$PrismaModel>
    _max?: NestedEnumJenisPenilaianFilter<$PrismaModel>
  }

  export type ReportScalarRelationFilter = {
    is?: ReportWhereInput
    isNot?: ReportWhereInput
  }

  export type SubKriteriaScalarRelationFilter = {
    is?: SubKriteriaWhereInput
    isNot?: SubKriteriaWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PenilaianCountOrderByAggregateInput = {
    id?: SortOrder
    nilai?: SortOrder
    reportId?: SortOrder
    subKriteriaId?: SortOrder
    evaluatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PenilaianAvgOrderByAggregateInput = {
    id?: SortOrder
    nilai?: SortOrder
    reportId?: SortOrder
    subKriteriaId?: SortOrder
    evaluatorId?: SortOrder
  }

  export type PenilaianMaxOrderByAggregateInput = {
    id?: SortOrder
    nilai?: SortOrder
    reportId?: SortOrder
    subKriteriaId?: SortOrder
    evaluatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PenilaianMinOrderByAggregateInput = {
    id?: SortOrder
    nilai?: SortOrder
    reportId?: SortOrder
    subKriteriaId?: SortOrder
    evaluatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PenilaianSumOrderByAggregateInput = {
    id?: SortOrder
    nilai?: SortOrder
    reportId?: SortOrder
    subKriteriaId?: SortOrder
    evaluatorId?: SortOrder
  }

  export type DokumenOrderByRelevanceInput = {
    fields: DokumenOrderByRelevanceFieldEnum | DokumenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DokumenCountOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    dokumenUrl?: SortOrder
    dosenId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DokumenAvgOrderByAggregateInput = {
    id?: SortOrder
    dosenId?: SortOrder
  }

  export type DokumenMaxOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    dokumenUrl?: SortOrder
    dosenId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DokumenMinOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    dokumenUrl?: SortOrder
    dosenId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DokumenSumOrderByAggregateInput = {
    id?: SortOrder
    dosenId?: SortOrder
  }

  export type PenilaianCreateNestedManyWithoutEvaluatorInput = {
    create?: XOR<PenilaianCreateWithoutEvaluatorInput, PenilaianUncheckedCreateWithoutEvaluatorInput> | PenilaianCreateWithoutEvaluatorInput[] | PenilaianUncheckedCreateWithoutEvaluatorInput[]
    connectOrCreate?: PenilaianCreateOrConnectWithoutEvaluatorInput | PenilaianCreateOrConnectWithoutEvaluatorInput[]
    createMany?: PenilaianCreateManyEvaluatorInputEnvelope
    connect?: PenilaianWhereUniqueInput | PenilaianWhereUniqueInput[]
  }

  export type PenilaianUncheckedCreateNestedManyWithoutEvaluatorInput = {
    create?: XOR<PenilaianCreateWithoutEvaluatorInput, PenilaianUncheckedCreateWithoutEvaluatorInput> | PenilaianCreateWithoutEvaluatorInput[] | PenilaianUncheckedCreateWithoutEvaluatorInput[]
    connectOrCreate?: PenilaianCreateOrConnectWithoutEvaluatorInput | PenilaianCreateOrConnectWithoutEvaluatorInput[]
    createMany?: PenilaianCreateManyEvaluatorInputEnvelope
    connect?: PenilaianWhereUniqueInput | PenilaianWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PenilaianUpdateManyWithoutEvaluatorNestedInput = {
    create?: XOR<PenilaianCreateWithoutEvaluatorInput, PenilaianUncheckedCreateWithoutEvaluatorInput> | PenilaianCreateWithoutEvaluatorInput[] | PenilaianUncheckedCreateWithoutEvaluatorInput[]
    connectOrCreate?: PenilaianCreateOrConnectWithoutEvaluatorInput | PenilaianCreateOrConnectWithoutEvaluatorInput[]
    upsert?: PenilaianUpsertWithWhereUniqueWithoutEvaluatorInput | PenilaianUpsertWithWhereUniqueWithoutEvaluatorInput[]
    createMany?: PenilaianCreateManyEvaluatorInputEnvelope
    set?: PenilaianWhereUniqueInput | PenilaianWhereUniqueInput[]
    disconnect?: PenilaianWhereUniqueInput | PenilaianWhereUniqueInput[]
    delete?: PenilaianWhereUniqueInput | PenilaianWhereUniqueInput[]
    connect?: PenilaianWhereUniqueInput | PenilaianWhereUniqueInput[]
    update?: PenilaianUpdateWithWhereUniqueWithoutEvaluatorInput | PenilaianUpdateWithWhereUniqueWithoutEvaluatorInput[]
    updateMany?: PenilaianUpdateManyWithWhereWithoutEvaluatorInput | PenilaianUpdateManyWithWhereWithoutEvaluatorInput[]
    deleteMany?: PenilaianScalarWhereInput | PenilaianScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PenilaianUncheckedUpdateManyWithoutEvaluatorNestedInput = {
    create?: XOR<PenilaianCreateWithoutEvaluatorInput, PenilaianUncheckedCreateWithoutEvaluatorInput> | PenilaianCreateWithoutEvaluatorInput[] | PenilaianUncheckedCreateWithoutEvaluatorInput[]
    connectOrCreate?: PenilaianCreateOrConnectWithoutEvaluatorInput | PenilaianCreateOrConnectWithoutEvaluatorInput[]
    upsert?: PenilaianUpsertWithWhereUniqueWithoutEvaluatorInput | PenilaianUpsertWithWhereUniqueWithoutEvaluatorInput[]
    createMany?: PenilaianCreateManyEvaluatorInputEnvelope
    set?: PenilaianWhereUniqueInput | PenilaianWhereUniqueInput[]
    disconnect?: PenilaianWhereUniqueInput | PenilaianWhereUniqueInput[]
    delete?: PenilaianWhereUniqueInput | PenilaianWhereUniqueInput[]
    connect?: PenilaianWhereUniqueInput | PenilaianWhereUniqueInput[]
    update?: PenilaianUpdateWithWhereUniqueWithoutEvaluatorInput | PenilaianUpdateWithWhereUniqueWithoutEvaluatorInput[]
    updateMany?: PenilaianUpdateManyWithWhereWithoutEvaluatorInput | PenilaianUpdateManyWithWhereWithoutEvaluatorInput[]
    deleteMany?: PenilaianScalarWhereInput | PenilaianScalarWhereInput[]
  }

  export type ReportCreateNestedManyWithoutPeriodeInput = {
    create?: XOR<ReportCreateWithoutPeriodeInput, ReportUncheckedCreateWithoutPeriodeInput> | ReportCreateWithoutPeriodeInput[] | ReportUncheckedCreateWithoutPeriodeInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutPeriodeInput | ReportCreateOrConnectWithoutPeriodeInput[]
    createMany?: ReportCreateManyPeriodeInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutPeriodeInput = {
    create?: XOR<ReportCreateWithoutPeriodeInput, ReportUncheckedCreateWithoutPeriodeInput> | ReportCreateWithoutPeriodeInput[] | ReportUncheckedCreateWithoutPeriodeInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutPeriodeInput | ReportCreateOrConnectWithoutPeriodeInput[]
    createMany?: ReportCreateManyPeriodeInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type ReportUpdateManyWithoutPeriodeNestedInput = {
    create?: XOR<ReportCreateWithoutPeriodeInput, ReportUncheckedCreateWithoutPeriodeInput> | ReportCreateWithoutPeriodeInput[] | ReportUncheckedCreateWithoutPeriodeInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutPeriodeInput | ReportCreateOrConnectWithoutPeriodeInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutPeriodeInput | ReportUpsertWithWhereUniqueWithoutPeriodeInput[]
    createMany?: ReportCreateManyPeriodeInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutPeriodeInput | ReportUpdateWithWhereUniqueWithoutPeriodeInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutPeriodeInput | ReportUpdateManyWithWhereWithoutPeriodeInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutPeriodeNestedInput = {
    create?: XOR<ReportCreateWithoutPeriodeInput, ReportUncheckedCreateWithoutPeriodeInput> | ReportCreateWithoutPeriodeInput[] | ReportUncheckedCreateWithoutPeriodeInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutPeriodeInput | ReportCreateOrConnectWithoutPeriodeInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutPeriodeInput | ReportUpsertWithWhereUniqueWithoutPeriodeInput[]
    createMany?: ReportCreateManyPeriodeInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutPeriodeInput | ReportUpdateWithWhereUniqueWithoutPeriodeInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutPeriodeInput | ReportUpdateManyWithWhereWithoutPeriodeInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type DosenCreateNestedManyWithoutHomebaseInput = {
    create?: XOR<DosenCreateWithoutHomebaseInput, DosenUncheckedCreateWithoutHomebaseInput> | DosenCreateWithoutHomebaseInput[] | DosenUncheckedCreateWithoutHomebaseInput[]
    connectOrCreate?: DosenCreateOrConnectWithoutHomebaseInput | DosenCreateOrConnectWithoutHomebaseInput[]
    createMany?: DosenCreateManyHomebaseInputEnvelope
    connect?: DosenWhereUniqueInput | DosenWhereUniqueInput[]
  }

  export type DosenUncheckedCreateNestedManyWithoutHomebaseInput = {
    create?: XOR<DosenCreateWithoutHomebaseInput, DosenUncheckedCreateWithoutHomebaseInput> | DosenCreateWithoutHomebaseInput[] | DosenUncheckedCreateWithoutHomebaseInput[]
    connectOrCreate?: DosenCreateOrConnectWithoutHomebaseInput | DosenCreateOrConnectWithoutHomebaseInput[]
    createMany?: DosenCreateManyHomebaseInputEnvelope
    connect?: DosenWhereUniqueInput | DosenWhereUniqueInput[]
  }

  export type DosenUpdateManyWithoutHomebaseNestedInput = {
    create?: XOR<DosenCreateWithoutHomebaseInput, DosenUncheckedCreateWithoutHomebaseInput> | DosenCreateWithoutHomebaseInput[] | DosenUncheckedCreateWithoutHomebaseInput[]
    connectOrCreate?: DosenCreateOrConnectWithoutHomebaseInput | DosenCreateOrConnectWithoutHomebaseInput[]
    upsert?: DosenUpsertWithWhereUniqueWithoutHomebaseInput | DosenUpsertWithWhereUniqueWithoutHomebaseInput[]
    createMany?: DosenCreateManyHomebaseInputEnvelope
    set?: DosenWhereUniqueInput | DosenWhereUniqueInput[]
    disconnect?: DosenWhereUniqueInput | DosenWhereUniqueInput[]
    delete?: DosenWhereUniqueInput | DosenWhereUniqueInput[]
    connect?: DosenWhereUniqueInput | DosenWhereUniqueInput[]
    update?: DosenUpdateWithWhereUniqueWithoutHomebaseInput | DosenUpdateWithWhereUniqueWithoutHomebaseInput[]
    updateMany?: DosenUpdateManyWithWhereWithoutHomebaseInput | DosenUpdateManyWithWhereWithoutHomebaseInput[]
    deleteMany?: DosenScalarWhereInput | DosenScalarWhereInput[]
  }

  export type DosenUncheckedUpdateManyWithoutHomebaseNestedInput = {
    create?: XOR<DosenCreateWithoutHomebaseInput, DosenUncheckedCreateWithoutHomebaseInput> | DosenCreateWithoutHomebaseInput[] | DosenUncheckedCreateWithoutHomebaseInput[]
    connectOrCreate?: DosenCreateOrConnectWithoutHomebaseInput | DosenCreateOrConnectWithoutHomebaseInput[]
    upsert?: DosenUpsertWithWhereUniqueWithoutHomebaseInput | DosenUpsertWithWhereUniqueWithoutHomebaseInput[]
    createMany?: DosenCreateManyHomebaseInputEnvelope
    set?: DosenWhereUniqueInput | DosenWhereUniqueInput[]
    disconnect?: DosenWhereUniqueInput | DosenWhereUniqueInput[]
    delete?: DosenWhereUniqueInput | DosenWhereUniqueInput[]
    connect?: DosenWhereUniqueInput | DosenWhereUniqueInput[]
    update?: DosenUpdateWithWhereUniqueWithoutHomebaseInput | DosenUpdateWithWhereUniqueWithoutHomebaseInput[]
    updateMany?: DosenUpdateManyWithWhereWithoutHomebaseInput | DosenUpdateManyWithWhereWithoutHomebaseInput[]
    deleteMany?: DosenScalarWhereInput | DosenScalarWhereInput[]
  }

  export type SubKriteriaCreateNestedManyWithoutKriteriaInput = {
    create?: XOR<SubKriteriaCreateWithoutKriteriaInput, SubKriteriaUncheckedCreateWithoutKriteriaInput> | SubKriteriaCreateWithoutKriteriaInput[] | SubKriteriaUncheckedCreateWithoutKriteriaInput[]
    connectOrCreate?: SubKriteriaCreateOrConnectWithoutKriteriaInput | SubKriteriaCreateOrConnectWithoutKriteriaInput[]
    createMany?: SubKriteriaCreateManyKriteriaInputEnvelope
    connect?: SubKriteriaWhereUniqueInput | SubKriteriaWhereUniqueInput[]
  }

  export type SubKriteriaUncheckedCreateNestedManyWithoutKriteriaInput = {
    create?: XOR<SubKriteriaCreateWithoutKriteriaInput, SubKriteriaUncheckedCreateWithoutKriteriaInput> | SubKriteriaCreateWithoutKriteriaInput[] | SubKriteriaUncheckedCreateWithoutKriteriaInput[]
    connectOrCreate?: SubKriteriaCreateOrConnectWithoutKriteriaInput | SubKriteriaCreateOrConnectWithoutKriteriaInput[]
    createMany?: SubKriteriaCreateManyKriteriaInputEnvelope
    connect?: SubKriteriaWhereUniqueInput | SubKriteriaWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SubKriteriaUpdateManyWithoutKriteriaNestedInput = {
    create?: XOR<SubKriteriaCreateWithoutKriteriaInput, SubKriteriaUncheckedCreateWithoutKriteriaInput> | SubKriteriaCreateWithoutKriteriaInput[] | SubKriteriaUncheckedCreateWithoutKriteriaInput[]
    connectOrCreate?: SubKriteriaCreateOrConnectWithoutKriteriaInput | SubKriteriaCreateOrConnectWithoutKriteriaInput[]
    upsert?: SubKriteriaUpsertWithWhereUniqueWithoutKriteriaInput | SubKriteriaUpsertWithWhereUniqueWithoutKriteriaInput[]
    createMany?: SubKriteriaCreateManyKriteriaInputEnvelope
    set?: SubKriteriaWhereUniqueInput | SubKriteriaWhereUniqueInput[]
    disconnect?: SubKriteriaWhereUniqueInput | SubKriteriaWhereUniqueInput[]
    delete?: SubKriteriaWhereUniqueInput | SubKriteriaWhereUniqueInput[]
    connect?: SubKriteriaWhereUniqueInput | SubKriteriaWhereUniqueInput[]
    update?: SubKriteriaUpdateWithWhereUniqueWithoutKriteriaInput | SubKriteriaUpdateWithWhereUniqueWithoutKriteriaInput[]
    updateMany?: SubKriteriaUpdateManyWithWhereWithoutKriteriaInput | SubKriteriaUpdateManyWithWhereWithoutKriteriaInput[]
    deleteMany?: SubKriteriaScalarWhereInput | SubKriteriaScalarWhereInput[]
  }

  export type SubKriteriaUncheckedUpdateManyWithoutKriteriaNestedInput = {
    create?: XOR<SubKriteriaCreateWithoutKriteriaInput, SubKriteriaUncheckedCreateWithoutKriteriaInput> | SubKriteriaCreateWithoutKriteriaInput[] | SubKriteriaUncheckedCreateWithoutKriteriaInput[]
    connectOrCreate?: SubKriteriaCreateOrConnectWithoutKriteriaInput | SubKriteriaCreateOrConnectWithoutKriteriaInput[]
    upsert?: SubKriteriaUpsertWithWhereUniqueWithoutKriteriaInput | SubKriteriaUpsertWithWhereUniqueWithoutKriteriaInput[]
    createMany?: SubKriteriaCreateManyKriteriaInputEnvelope
    set?: SubKriteriaWhereUniqueInput | SubKriteriaWhereUniqueInput[]
    disconnect?: SubKriteriaWhereUniqueInput | SubKriteriaWhereUniqueInput[]
    delete?: SubKriteriaWhereUniqueInput | SubKriteriaWhereUniqueInput[]
    connect?: SubKriteriaWhereUniqueInput | SubKriteriaWhereUniqueInput[]
    update?: SubKriteriaUpdateWithWhereUniqueWithoutKriteriaInput | SubKriteriaUpdateWithWhereUniqueWithoutKriteriaInput[]
    updateMany?: SubKriteriaUpdateManyWithWhereWithoutKriteriaInput | SubKriteriaUpdateManyWithWhereWithoutKriteriaInput[]
    deleteMany?: SubKriteriaScalarWhereInput | SubKriteriaScalarWhereInput[]
  }

  export type HomebaseCreateNestedOneWithoutDosenInput = {
    create?: XOR<HomebaseCreateWithoutDosenInput, HomebaseUncheckedCreateWithoutDosenInput>
    connectOrCreate?: HomebaseCreateOrConnectWithoutDosenInput
    connect?: HomebaseWhereUniqueInput
  }

  export type ReportCreateNestedManyWithoutDosenInput = {
    create?: XOR<ReportCreateWithoutDosenInput, ReportUncheckedCreateWithoutDosenInput> | ReportCreateWithoutDosenInput[] | ReportUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutDosenInput | ReportCreateOrConnectWithoutDosenInput[]
    createMany?: ReportCreateManyDosenInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type DokumenCreateNestedManyWithoutDosenInput = {
    create?: XOR<DokumenCreateWithoutDosenInput, DokumenUncheckedCreateWithoutDosenInput> | DokumenCreateWithoutDosenInput[] | DokumenUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: DokumenCreateOrConnectWithoutDosenInput | DokumenCreateOrConnectWithoutDosenInput[]
    createMany?: DokumenCreateManyDosenInputEnvelope
    connect?: DokumenWhereUniqueInput | DokumenWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutDosenInput = {
    create?: XOR<ReportCreateWithoutDosenInput, ReportUncheckedCreateWithoutDosenInput> | ReportCreateWithoutDosenInput[] | ReportUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutDosenInput | ReportCreateOrConnectWithoutDosenInput[]
    createMany?: ReportCreateManyDosenInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type DokumenUncheckedCreateNestedManyWithoutDosenInput = {
    create?: XOR<DokumenCreateWithoutDosenInput, DokumenUncheckedCreateWithoutDosenInput> | DokumenCreateWithoutDosenInput[] | DokumenUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: DokumenCreateOrConnectWithoutDosenInput | DokumenCreateOrConnectWithoutDosenInput[]
    createMany?: DokumenCreateManyDosenInputEnvelope
    connect?: DokumenWhereUniqueInput | DokumenWhereUniqueInput[]
  }

  export type EnumJabatanFieldUpdateOperationsInput = {
    set?: $Enums.Jabatan
  }

  export type HomebaseUpdateOneRequiredWithoutDosenNestedInput = {
    create?: XOR<HomebaseCreateWithoutDosenInput, HomebaseUncheckedCreateWithoutDosenInput>
    connectOrCreate?: HomebaseCreateOrConnectWithoutDosenInput
    upsert?: HomebaseUpsertWithoutDosenInput
    connect?: HomebaseWhereUniqueInput
    update?: XOR<XOR<HomebaseUpdateToOneWithWhereWithoutDosenInput, HomebaseUpdateWithoutDosenInput>, HomebaseUncheckedUpdateWithoutDosenInput>
  }

  export type ReportUpdateManyWithoutDosenNestedInput = {
    create?: XOR<ReportCreateWithoutDosenInput, ReportUncheckedCreateWithoutDosenInput> | ReportCreateWithoutDosenInput[] | ReportUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutDosenInput | ReportCreateOrConnectWithoutDosenInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutDosenInput | ReportUpsertWithWhereUniqueWithoutDosenInput[]
    createMany?: ReportCreateManyDosenInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutDosenInput | ReportUpdateWithWhereUniqueWithoutDosenInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutDosenInput | ReportUpdateManyWithWhereWithoutDosenInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type DokumenUpdateManyWithoutDosenNestedInput = {
    create?: XOR<DokumenCreateWithoutDosenInput, DokumenUncheckedCreateWithoutDosenInput> | DokumenCreateWithoutDosenInput[] | DokumenUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: DokumenCreateOrConnectWithoutDosenInput | DokumenCreateOrConnectWithoutDosenInput[]
    upsert?: DokumenUpsertWithWhereUniqueWithoutDosenInput | DokumenUpsertWithWhereUniqueWithoutDosenInput[]
    createMany?: DokumenCreateManyDosenInputEnvelope
    set?: DokumenWhereUniqueInput | DokumenWhereUniqueInput[]
    disconnect?: DokumenWhereUniqueInput | DokumenWhereUniqueInput[]
    delete?: DokumenWhereUniqueInput | DokumenWhereUniqueInput[]
    connect?: DokumenWhereUniqueInput | DokumenWhereUniqueInput[]
    update?: DokumenUpdateWithWhereUniqueWithoutDosenInput | DokumenUpdateWithWhereUniqueWithoutDosenInput[]
    updateMany?: DokumenUpdateManyWithWhereWithoutDosenInput | DokumenUpdateManyWithWhereWithoutDosenInput[]
    deleteMany?: DokumenScalarWhereInput | DokumenScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutDosenNestedInput = {
    create?: XOR<ReportCreateWithoutDosenInput, ReportUncheckedCreateWithoutDosenInput> | ReportCreateWithoutDosenInput[] | ReportUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutDosenInput | ReportCreateOrConnectWithoutDosenInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutDosenInput | ReportUpsertWithWhereUniqueWithoutDosenInput[]
    createMany?: ReportCreateManyDosenInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutDosenInput | ReportUpdateWithWhereUniqueWithoutDosenInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutDosenInput | ReportUpdateManyWithWhereWithoutDosenInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type DokumenUncheckedUpdateManyWithoutDosenNestedInput = {
    create?: XOR<DokumenCreateWithoutDosenInput, DokumenUncheckedCreateWithoutDosenInput> | DokumenCreateWithoutDosenInput[] | DokumenUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: DokumenCreateOrConnectWithoutDosenInput | DokumenCreateOrConnectWithoutDosenInput[]
    upsert?: DokumenUpsertWithWhereUniqueWithoutDosenInput | DokumenUpsertWithWhereUniqueWithoutDosenInput[]
    createMany?: DokumenCreateManyDosenInputEnvelope
    set?: DokumenWhereUniqueInput | DokumenWhereUniqueInput[]
    disconnect?: DokumenWhereUniqueInput | DokumenWhereUniqueInput[]
    delete?: DokumenWhereUniqueInput | DokumenWhereUniqueInput[]
    connect?: DokumenWhereUniqueInput | DokumenWhereUniqueInput[]
    update?: DokumenUpdateWithWhereUniqueWithoutDosenInput | DokumenUpdateWithWhereUniqueWithoutDosenInput[]
    updateMany?: DokumenUpdateManyWithWhereWithoutDosenInput | DokumenUpdateManyWithWhereWithoutDosenInput[]
    deleteMany?: DokumenScalarWhereInput | DokumenScalarWhereInput[]
  }

  export type DosenCreateNestedOneWithoutReportInput = {
    create?: XOR<DosenCreateWithoutReportInput, DosenUncheckedCreateWithoutReportInput>
    connectOrCreate?: DosenCreateOrConnectWithoutReportInput
    connect?: DosenWhereUniqueInput
  }

  export type PeriodeCreateNestedOneWithoutReportInput = {
    create?: XOR<PeriodeCreateWithoutReportInput, PeriodeUncheckedCreateWithoutReportInput>
    connectOrCreate?: PeriodeCreateOrConnectWithoutReportInput
    connect?: PeriodeWhereUniqueInput
  }

  export type PenilaianCreateNestedManyWithoutReportInput = {
    create?: XOR<PenilaianCreateWithoutReportInput, PenilaianUncheckedCreateWithoutReportInput> | PenilaianCreateWithoutReportInput[] | PenilaianUncheckedCreateWithoutReportInput[]
    connectOrCreate?: PenilaianCreateOrConnectWithoutReportInput | PenilaianCreateOrConnectWithoutReportInput[]
    createMany?: PenilaianCreateManyReportInputEnvelope
    connect?: PenilaianWhereUniqueInput | PenilaianWhereUniqueInput[]
  }

  export type PenilaianUncheckedCreateNestedManyWithoutReportInput = {
    create?: XOR<PenilaianCreateWithoutReportInput, PenilaianUncheckedCreateWithoutReportInput> | PenilaianCreateWithoutReportInput[] | PenilaianUncheckedCreateWithoutReportInput[]
    connectOrCreate?: PenilaianCreateOrConnectWithoutReportInput | PenilaianCreateOrConnectWithoutReportInput[]
    createMany?: PenilaianCreateManyReportInputEnvelope
    connect?: PenilaianWhereUniqueInput | PenilaianWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumReportStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReportStatus
  }

  export type DosenUpdateOneRequiredWithoutReportNestedInput = {
    create?: XOR<DosenCreateWithoutReportInput, DosenUncheckedCreateWithoutReportInput>
    connectOrCreate?: DosenCreateOrConnectWithoutReportInput
    upsert?: DosenUpsertWithoutReportInput
    connect?: DosenWhereUniqueInput
    update?: XOR<XOR<DosenUpdateToOneWithWhereWithoutReportInput, DosenUpdateWithoutReportInput>, DosenUncheckedUpdateWithoutReportInput>
  }

  export type PeriodeUpdateOneRequiredWithoutReportNestedInput = {
    create?: XOR<PeriodeCreateWithoutReportInput, PeriodeUncheckedCreateWithoutReportInput>
    connectOrCreate?: PeriodeCreateOrConnectWithoutReportInput
    upsert?: PeriodeUpsertWithoutReportInput
    connect?: PeriodeWhereUniqueInput
    update?: XOR<XOR<PeriodeUpdateToOneWithWhereWithoutReportInput, PeriodeUpdateWithoutReportInput>, PeriodeUncheckedUpdateWithoutReportInput>
  }

  export type PenilaianUpdateManyWithoutReportNestedInput = {
    create?: XOR<PenilaianCreateWithoutReportInput, PenilaianUncheckedCreateWithoutReportInput> | PenilaianCreateWithoutReportInput[] | PenilaianUncheckedCreateWithoutReportInput[]
    connectOrCreate?: PenilaianCreateOrConnectWithoutReportInput | PenilaianCreateOrConnectWithoutReportInput[]
    upsert?: PenilaianUpsertWithWhereUniqueWithoutReportInput | PenilaianUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: PenilaianCreateManyReportInputEnvelope
    set?: PenilaianWhereUniqueInput | PenilaianWhereUniqueInput[]
    disconnect?: PenilaianWhereUniqueInput | PenilaianWhereUniqueInput[]
    delete?: PenilaianWhereUniqueInput | PenilaianWhereUniqueInput[]
    connect?: PenilaianWhereUniqueInput | PenilaianWhereUniqueInput[]
    update?: PenilaianUpdateWithWhereUniqueWithoutReportInput | PenilaianUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: PenilaianUpdateManyWithWhereWithoutReportInput | PenilaianUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: PenilaianScalarWhereInput | PenilaianScalarWhereInput[]
  }

  export type PenilaianUncheckedUpdateManyWithoutReportNestedInput = {
    create?: XOR<PenilaianCreateWithoutReportInput, PenilaianUncheckedCreateWithoutReportInput> | PenilaianCreateWithoutReportInput[] | PenilaianUncheckedCreateWithoutReportInput[]
    connectOrCreate?: PenilaianCreateOrConnectWithoutReportInput | PenilaianCreateOrConnectWithoutReportInput[]
    upsert?: PenilaianUpsertWithWhereUniqueWithoutReportInput | PenilaianUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: PenilaianCreateManyReportInputEnvelope
    set?: PenilaianWhereUniqueInput | PenilaianWhereUniqueInput[]
    disconnect?: PenilaianWhereUniqueInput | PenilaianWhereUniqueInput[]
    delete?: PenilaianWhereUniqueInput | PenilaianWhereUniqueInput[]
    connect?: PenilaianWhereUniqueInput | PenilaianWhereUniqueInput[]
    update?: PenilaianUpdateWithWhereUniqueWithoutReportInput | PenilaianUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: PenilaianUpdateManyWithWhereWithoutReportInput | PenilaianUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: PenilaianScalarWhereInput | PenilaianScalarWhereInput[]
  }

  export type KriteriaCreateNestedOneWithoutSubKriteriaInput = {
    create?: XOR<KriteriaCreateWithoutSubKriteriaInput, KriteriaUncheckedCreateWithoutSubKriteriaInput>
    connectOrCreate?: KriteriaCreateOrConnectWithoutSubKriteriaInput
    connect?: KriteriaWhereUniqueInput
  }

  export type PenilaianCreateNestedManyWithoutSubKriteriaInput = {
    create?: XOR<PenilaianCreateWithoutSubKriteriaInput, PenilaianUncheckedCreateWithoutSubKriteriaInput> | PenilaianCreateWithoutSubKriteriaInput[] | PenilaianUncheckedCreateWithoutSubKriteriaInput[]
    connectOrCreate?: PenilaianCreateOrConnectWithoutSubKriteriaInput | PenilaianCreateOrConnectWithoutSubKriteriaInput[]
    createMany?: PenilaianCreateManySubKriteriaInputEnvelope
    connect?: PenilaianWhereUniqueInput | PenilaianWhereUniqueInput[]
  }

  export type PenilaianUncheckedCreateNestedManyWithoutSubKriteriaInput = {
    create?: XOR<PenilaianCreateWithoutSubKriteriaInput, PenilaianUncheckedCreateWithoutSubKriteriaInput> | PenilaianCreateWithoutSubKriteriaInput[] | PenilaianUncheckedCreateWithoutSubKriteriaInput[]
    connectOrCreate?: PenilaianCreateOrConnectWithoutSubKriteriaInput | PenilaianCreateOrConnectWithoutSubKriteriaInput[]
    createMany?: PenilaianCreateManySubKriteriaInputEnvelope
    connect?: PenilaianWhereUniqueInput | PenilaianWhereUniqueInput[]
  }

  export type EnumJenisPenilaianFieldUpdateOperationsInput = {
    set?: $Enums.JenisPenilaian
  }

  export type KriteriaUpdateOneRequiredWithoutSubKriteriaNestedInput = {
    create?: XOR<KriteriaCreateWithoutSubKriteriaInput, KriteriaUncheckedCreateWithoutSubKriteriaInput>
    connectOrCreate?: KriteriaCreateOrConnectWithoutSubKriteriaInput
    upsert?: KriteriaUpsertWithoutSubKriteriaInput
    connect?: KriteriaWhereUniqueInput
    update?: XOR<XOR<KriteriaUpdateToOneWithWhereWithoutSubKriteriaInput, KriteriaUpdateWithoutSubKriteriaInput>, KriteriaUncheckedUpdateWithoutSubKriteriaInput>
  }

  export type PenilaianUpdateManyWithoutSubKriteriaNestedInput = {
    create?: XOR<PenilaianCreateWithoutSubKriteriaInput, PenilaianUncheckedCreateWithoutSubKriteriaInput> | PenilaianCreateWithoutSubKriteriaInput[] | PenilaianUncheckedCreateWithoutSubKriteriaInput[]
    connectOrCreate?: PenilaianCreateOrConnectWithoutSubKriteriaInput | PenilaianCreateOrConnectWithoutSubKriteriaInput[]
    upsert?: PenilaianUpsertWithWhereUniqueWithoutSubKriteriaInput | PenilaianUpsertWithWhereUniqueWithoutSubKriteriaInput[]
    createMany?: PenilaianCreateManySubKriteriaInputEnvelope
    set?: PenilaianWhereUniqueInput | PenilaianWhereUniqueInput[]
    disconnect?: PenilaianWhereUniqueInput | PenilaianWhereUniqueInput[]
    delete?: PenilaianWhereUniqueInput | PenilaianWhereUniqueInput[]
    connect?: PenilaianWhereUniqueInput | PenilaianWhereUniqueInput[]
    update?: PenilaianUpdateWithWhereUniqueWithoutSubKriteriaInput | PenilaianUpdateWithWhereUniqueWithoutSubKriteriaInput[]
    updateMany?: PenilaianUpdateManyWithWhereWithoutSubKriteriaInput | PenilaianUpdateManyWithWhereWithoutSubKriteriaInput[]
    deleteMany?: PenilaianScalarWhereInput | PenilaianScalarWhereInput[]
  }

  export type PenilaianUncheckedUpdateManyWithoutSubKriteriaNestedInput = {
    create?: XOR<PenilaianCreateWithoutSubKriteriaInput, PenilaianUncheckedCreateWithoutSubKriteriaInput> | PenilaianCreateWithoutSubKriteriaInput[] | PenilaianUncheckedCreateWithoutSubKriteriaInput[]
    connectOrCreate?: PenilaianCreateOrConnectWithoutSubKriteriaInput | PenilaianCreateOrConnectWithoutSubKriteriaInput[]
    upsert?: PenilaianUpsertWithWhereUniqueWithoutSubKriteriaInput | PenilaianUpsertWithWhereUniqueWithoutSubKriteriaInput[]
    createMany?: PenilaianCreateManySubKriteriaInputEnvelope
    set?: PenilaianWhereUniqueInput | PenilaianWhereUniqueInput[]
    disconnect?: PenilaianWhereUniqueInput | PenilaianWhereUniqueInput[]
    delete?: PenilaianWhereUniqueInput | PenilaianWhereUniqueInput[]
    connect?: PenilaianWhereUniqueInput | PenilaianWhereUniqueInput[]
    update?: PenilaianUpdateWithWhereUniqueWithoutSubKriteriaInput | PenilaianUpdateWithWhereUniqueWithoutSubKriteriaInput[]
    updateMany?: PenilaianUpdateManyWithWhereWithoutSubKriteriaInput | PenilaianUpdateManyWithWhereWithoutSubKriteriaInput[]
    deleteMany?: PenilaianScalarWhereInput | PenilaianScalarWhereInput[]
  }

  export type ReportCreateNestedOneWithoutPenilaianInput = {
    create?: XOR<ReportCreateWithoutPenilaianInput, ReportUncheckedCreateWithoutPenilaianInput>
    connectOrCreate?: ReportCreateOrConnectWithoutPenilaianInput
    connect?: ReportWhereUniqueInput
  }

  export type SubKriteriaCreateNestedOneWithoutPenilaianInput = {
    create?: XOR<SubKriteriaCreateWithoutPenilaianInput, SubKriteriaUncheckedCreateWithoutPenilaianInput>
    connectOrCreate?: SubKriteriaCreateOrConnectWithoutPenilaianInput
    connect?: SubKriteriaWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPenilaianInput = {
    create?: XOR<UserCreateWithoutPenilaianInput, UserUncheckedCreateWithoutPenilaianInput>
    connectOrCreate?: UserCreateOrConnectWithoutPenilaianInput
    connect?: UserWhereUniqueInput
  }

  export type ReportUpdateOneRequiredWithoutPenilaianNestedInput = {
    create?: XOR<ReportCreateWithoutPenilaianInput, ReportUncheckedCreateWithoutPenilaianInput>
    connectOrCreate?: ReportCreateOrConnectWithoutPenilaianInput
    upsert?: ReportUpsertWithoutPenilaianInput
    connect?: ReportWhereUniqueInput
    update?: XOR<XOR<ReportUpdateToOneWithWhereWithoutPenilaianInput, ReportUpdateWithoutPenilaianInput>, ReportUncheckedUpdateWithoutPenilaianInput>
  }

  export type SubKriteriaUpdateOneRequiredWithoutPenilaianNestedInput = {
    create?: XOR<SubKriteriaCreateWithoutPenilaianInput, SubKriteriaUncheckedCreateWithoutPenilaianInput>
    connectOrCreate?: SubKriteriaCreateOrConnectWithoutPenilaianInput
    upsert?: SubKriteriaUpsertWithoutPenilaianInput
    connect?: SubKriteriaWhereUniqueInput
    update?: XOR<XOR<SubKriteriaUpdateToOneWithWhereWithoutPenilaianInput, SubKriteriaUpdateWithoutPenilaianInput>, SubKriteriaUncheckedUpdateWithoutPenilaianInput>
  }

  export type UserUpdateOneRequiredWithoutPenilaianNestedInput = {
    create?: XOR<UserCreateWithoutPenilaianInput, UserUncheckedCreateWithoutPenilaianInput>
    connectOrCreate?: UserCreateOrConnectWithoutPenilaianInput
    upsert?: UserUpsertWithoutPenilaianInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPenilaianInput, UserUpdateWithoutPenilaianInput>, UserUncheckedUpdateWithoutPenilaianInput>
  }

  export type DosenCreateNestedOneWithoutDokumenInput = {
    create?: XOR<DosenCreateWithoutDokumenInput, DosenUncheckedCreateWithoutDokumenInput>
    connectOrCreate?: DosenCreateOrConnectWithoutDokumenInput
    connect?: DosenWhereUniqueInput
  }

  export type DosenUpdateOneRequiredWithoutDokumenNestedInput = {
    create?: XOR<DosenCreateWithoutDokumenInput, DosenUncheckedCreateWithoutDokumenInput>
    connectOrCreate?: DosenCreateOrConnectWithoutDokumenInput
    upsert?: DosenUpsertWithoutDokumenInput
    connect?: DosenWhereUniqueInput
    update?: XOR<XOR<DosenUpdateToOneWithWhereWithoutDokumenInput, DosenUpdateWithoutDokumenInput>, DosenUncheckedUpdateWithoutDokumenInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumJabatanFilter<$PrismaModel = never> = {
    equals?: $Enums.Jabatan | EnumJabatanFieldRefInput<$PrismaModel>
    in?: $Enums.Jabatan[]
    notIn?: $Enums.Jabatan[]
    not?: NestedEnumJabatanFilter<$PrismaModel> | $Enums.Jabatan
  }

  export type NestedEnumJabatanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Jabatan | EnumJabatanFieldRefInput<$PrismaModel>
    in?: $Enums.Jabatan[]
    notIn?: $Enums.Jabatan[]
    not?: NestedEnumJabatanWithAggregatesFilter<$PrismaModel> | $Enums.Jabatan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJabatanFilter<$PrismaModel>
    _max?: NestedEnumJabatanFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumReportStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[]
    notIn?: $Enums.ReportStatus[]
    not?: NestedEnumReportStatusFilter<$PrismaModel> | $Enums.ReportStatus
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumReportStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[]
    notIn?: $Enums.ReportStatus[]
    not?: NestedEnumReportStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReportStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportStatusFilter<$PrismaModel>
    _max?: NestedEnumReportStatusFilter<$PrismaModel>
  }

  export type NestedEnumJenisPenilaianFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisPenilaian | EnumJenisPenilaianFieldRefInput<$PrismaModel>
    in?: $Enums.JenisPenilaian[]
    notIn?: $Enums.JenisPenilaian[]
    not?: NestedEnumJenisPenilaianFilter<$PrismaModel> | $Enums.JenisPenilaian
  }

  export type NestedEnumJenisPenilaianWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisPenilaian | EnumJenisPenilaianFieldRefInput<$PrismaModel>
    in?: $Enums.JenisPenilaian[]
    notIn?: $Enums.JenisPenilaian[]
    not?: NestedEnumJenisPenilaianWithAggregatesFilter<$PrismaModel> | $Enums.JenisPenilaian
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisPenilaianFilter<$PrismaModel>
    _max?: NestedEnumJenisPenilaianFilter<$PrismaModel>
  }

  export type PenilaianCreateWithoutEvaluatorInput = {
    nilai: number
    createdAt?: Date | string
    updatedAt?: Date | string
    report: ReportCreateNestedOneWithoutPenilaianInput
    subKriteria: SubKriteriaCreateNestedOneWithoutPenilaianInput
  }

  export type PenilaianUncheckedCreateWithoutEvaluatorInput = {
    id?: number
    nilai: number
    reportId: number
    subKriteriaId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PenilaianCreateOrConnectWithoutEvaluatorInput = {
    where: PenilaianWhereUniqueInput
    create: XOR<PenilaianCreateWithoutEvaluatorInput, PenilaianUncheckedCreateWithoutEvaluatorInput>
  }

  export type PenilaianCreateManyEvaluatorInputEnvelope = {
    data: PenilaianCreateManyEvaluatorInput | PenilaianCreateManyEvaluatorInput[]
    skipDuplicates?: boolean
  }

  export type PenilaianUpsertWithWhereUniqueWithoutEvaluatorInput = {
    where: PenilaianWhereUniqueInput
    update: XOR<PenilaianUpdateWithoutEvaluatorInput, PenilaianUncheckedUpdateWithoutEvaluatorInput>
    create: XOR<PenilaianCreateWithoutEvaluatorInput, PenilaianUncheckedCreateWithoutEvaluatorInput>
  }

  export type PenilaianUpdateWithWhereUniqueWithoutEvaluatorInput = {
    where: PenilaianWhereUniqueInput
    data: XOR<PenilaianUpdateWithoutEvaluatorInput, PenilaianUncheckedUpdateWithoutEvaluatorInput>
  }

  export type PenilaianUpdateManyWithWhereWithoutEvaluatorInput = {
    where: PenilaianScalarWhereInput
    data: XOR<PenilaianUpdateManyMutationInput, PenilaianUncheckedUpdateManyWithoutEvaluatorInput>
  }

  export type PenilaianScalarWhereInput = {
    AND?: PenilaianScalarWhereInput | PenilaianScalarWhereInput[]
    OR?: PenilaianScalarWhereInput[]
    NOT?: PenilaianScalarWhereInput | PenilaianScalarWhereInput[]
    id?: IntFilter<"Penilaian"> | number
    nilai?: FloatFilter<"Penilaian"> | number
    reportId?: IntFilter<"Penilaian"> | number
    subKriteriaId?: IntFilter<"Penilaian"> | number
    evaluatorId?: IntFilter<"Penilaian"> | number
    createdAt?: DateTimeFilter<"Penilaian"> | Date | string
    updatedAt?: DateTimeFilter<"Penilaian"> | Date | string
  }

  export type ReportCreateWithoutPeriodeInput = {
    nilaiAkhir?: number | null
    status: $Enums.ReportStatus
    deskripsi: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dosen: DosenCreateNestedOneWithoutReportInput
    Penilaian?: PenilaianCreateNestedManyWithoutReportInput
  }

  export type ReportUncheckedCreateWithoutPeriodeInput = {
    id?: number
    nilaiAkhir?: number | null
    status: $Enums.ReportStatus
    dosenId: number
    deskripsi: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Penilaian?: PenilaianUncheckedCreateNestedManyWithoutReportInput
  }

  export type ReportCreateOrConnectWithoutPeriodeInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutPeriodeInput, ReportUncheckedCreateWithoutPeriodeInput>
  }

  export type ReportCreateManyPeriodeInputEnvelope = {
    data: ReportCreateManyPeriodeInput | ReportCreateManyPeriodeInput[]
    skipDuplicates?: boolean
  }

  export type ReportUpsertWithWhereUniqueWithoutPeriodeInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutPeriodeInput, ReportUncheckedUpdateWithoutPeriodeInput>
    create: XOR<ReportCreateWithoutPeriodeInput, ReportUncheckedCreateWithoutPeriodeInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutPeriodeInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutPeriodeInput, ReportUncheckedUpdateWithoutPeriodeInput>
  }

  export type ReportUpdateManyWithWhereWithoutPeriodeInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutPeriodeInput>
  }

  export type ReportScalarWhereInput = {
    AND?: ReportScalarWhereInput | ReportScalarWhereInput[]
    OR?: ReportScalarWhereInput[]
    NOT?: ReportScalarWhereInput | ReportScalarWhereInput[]
    id?: IntFilter<"Report"> | number
    nilaiAkhir?: FloatNullableFilter<"Report"> | number | null
    status?: EnumReportStatusFilter<"Report"> | $Enums.ReportStatus
    dosenId?: IntFilter<"Report"> | number
    periodeId?: IntFilter<"Report"> | number
    deskripsi?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    updatedAt?: DateTimeFilter<"Report"> | Date | string
  }

  export type DosenCreateWithoutHomebaseInput = {
    nama: string
    nip: string
    jabatan: $Enums.Jabatan
    createdAt?: Date | string
    updatedAt?: Date | string
    Report?: ReportCreateNestedManyWithoutDosenInput
    Dokumen?: DokumenCreateNestedManyWithoutDosenInput
  }

  export type DosenUncheckedCreateWithoutHomebaseInput = {
    id?: number
    nama: string
    nip: string
    jabatan: $Enums.Jabatan
    createdAt?: Date | string
    updatedAt?: Date | string
    Report?: ReportUncheckedCreateNestedManyWithoutDosenInput
    Dokumen?: DokumenUncheckedCreateNestedManyWithoutDosenInput
  }

  export type DosenCreateOrConnectWithoutHomebaseInput = {
    where: DosenWhereUniqueInput
    create: XOR<DosenCreateWithoutHomebaseInput, DosenUncheckedCreateWithoutHomebaseInput>
  }

  export type DosenCreateManyHomebaseInputEnvelope = {
    data: DosenCreateManyHomebaseInput | DosenCreateManyHomebaseInput[]
    skipDuplicates?: boolean
  }

  export type DosenUpsertWithWhereUniqueWithoutHomebaseInput = {
    where: DosenWhereUniqueInput
    update: XOR<DosenUpdateWithoutHomebaseInput, DosenUncheckedUpdateWithoutHomebaseInput>
    create: XOR<DosenCreateWithoutHomebaseInput, DosenUncheckedCreateWithoutHomebaseInput>
  }

  export type DosenUpdateWithWhereUniqueWithoutHomebaseInput = {
    where: DosenWhereUniqueInput
    data: XOR<DosenUpdateWithoutHomebaseInput, DosenUncheckedUpdateWithoutHomebaseInput>
  }

  export type DosenUpdateManyWithWhereWithoutHomebaseInput = {
    where: DosenScalarWhereInput
    data: XOR<DosenUpdateManyMutationInput, DosenUncheckedUpdateManyWithoutHomebaseInput>
  }

  export type DosenScalarWhereInput = {
    AND?: DosenScalarWhereInput | DosenScalarWhereInput[]
    OR?: DosenScalarWhereInput[]
    NOT?: DosenScalarWhereInput | DosenScalarWhereInput[]
    id?: IntFilter<"Dosen"> | number
    nama?: StringFilter<"Dosen"> | string
    nip?: StringFilter<"Dosen"> | string
    jabatan?: EnumJabatanFilter<"Dosen"> | $Enums.Jabatan
    homebaseId?: IntFilter<"Dosen"> | number
    createdAt?: DateTimeFilter<"Dosen"> | Date | string
    updatedAt?: DateTimeFilter<"Dosen"> | Date | string
  }

  export type SubKriteriaCreateWithoutKriteriaInput = {
    nama: string
    nilaiMaksimal: number
    jenis: $Enums.JenisPenilaian
    createdAt?: Date | string
    updatedAt?: Date | string
    Penilaian?: PenilaianCreateNestedManyWithoutSubKriteriaInput
  }

  export type SubKriteriaUncheckedCreateWithoutKriteriaInput = {
    id?: number
    nama: string
    nilaiMaksimal: number
    jenis: $Enums.JenisPenilaian
    createdAt?: Date | string
    updatedAt?: Date | string
    Penilaian?: PenilaianUncheckedCreateNestedManyWithoutSubKriteriaInput
  }

  export type SubKriteriaCreateOrConnectWithoutKriteriaInput = {
    where: SubKriteriaWhereUniqueInput
    create: XOR<SubKriteriaCreateWithoutKriteriaInput, SubKriteriaUncheckedCreateWithoutKriteriaInput>
  }

  export type SubKriteriaCreateManyKriteriaInputEnvelope = {
    data: SubKriteriaCreateManyKriteriaInput | SubKriteriaCreateManyKriteriaInput[]
    skipDuplicates?: boolean
  }

  export type SubKriteriaUpsertWithWhereUniqueWithoutKriteriaInput = {
    where: SubKriteriaWhereUniqueInput
    update: XOR<SubKriteriaUpdateWithoutKriteriaInput, SubKriteriaUncheckedUpdateWithoutKriteriaInput>
    create: XOR<SubKriteriaCreateWithoutKriteriaInput, SubKriteriaUncheckedCreateWithoutKriteriaInput>
  }

  export type SubKriteriaUpdateWithWhereUniqueWithoutKriteriaInput = {
    where: SubKriteriaWhereUniqueInput
    data: XOR<SubKriteriaUpdateWithoutKriteriaInput, SubKriteriaUncheckedUpdateWithoutKriteriaInput>
  }

  export type SubKriteriaUpdateManyWithWhereWithoutKriteriaInput = {
    where: SubKriteriaScalarWhereInput
    data: XOR<SubKriteriaUpdateManyMutationInput, SubKriteriaUncheckedUpdateManyWithoutKriteriaInput>
  }

  export type SubKriteriaScalarWhereInput = {
    AND?: SubKriteriaScalarWhereInput | SubKriteriaScalarWhereInput[]
    OR?: SubKriteriaScalarWhereInput[]
    NOT?: SubKriteriaScalarWhereInput | SubKriteriaScalarWhereInput[]
    id?: IntFilter<"SubKriteria"> | number
    nama?: StringFilter<"SubKriteria"> | string
    nilaiMaksimal?: IntFilter<"SubKriteria"> | number
    kriteriaId?: IntFilter<"SubKriteria"> | number
    jenis?: EnumJenisPenilaianFilter<"SubKriteria"> | $Enums.JenisPenilaian
    createdAt?: DateTimeFilter<"SubKriteria"> | Date | string
    updatedAt?: DateTimeFilter<"SubKriteria"> | Date | string
  }

  export type HomebaseCreateWithoutDosenInput = {
    nama: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomebaseUncheckedCreateWithoutDosenInput = {
    id?: number
    nama: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomebaseCreateOrConnectWithoutDosenInput = {
    where: HomebaseWhereUniqueInput
    create: XOR<HomebaseCreateWithoutDosenInput, HomebaseUncheckedCreateWithoutDosenInput>
  }

  export type ReportCreateWithoutDosenInput = {
    nilaiAkhir?: number | null
    status: $Enums.ReportStatus
    deskripsi: string
    createdAt?: Date | string
    updatedAt?: Date | string
    periode: PeriodeCreateNestedOneWithoutReportInput
    Penilaian?: PenilaianCreateNestedManyWithoutReportInput
  }

  export type ReportUncheckedCreateWithoutDosenInput = {
    id?: number
    nilaiAkhir?: number | null
    status: $Enums.ReportStatus
    periodeId: number
    deskripsi: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Penilaian?: PenilaianUncheckedCreateNestedManyWithoutReportInput
  }

  export type ReportCreateOrConnectWithoutDosenInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutDosenInput, ReportUncheckedCreateWithoutDosenInput>
  }

  export type ReportCreateManyDosenInputEnvelope = {
    data: ReportCreateManyDosenInput | ReportCreateManyDosenInput[]
    skipDuplicates?: boolean
  }

  export type DokumenCreateWithoutDosenInput = {
    judul: string
    dokumenUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DokumenUncheckedCreateWithoutDosenInput = {
    id?: number
    judul: string
    dokumenUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DokumenCreateOrConnectWithoutDosenInput = {
    where: DokumenWhereUniqueInput
    create: XOR<DokumenCreateWithoutDosenInput, DokumenUncheckedCreateWithoutDosenInput>
  }

  export type DokumenCreateManyDosenInputEnvelope = {
    data: DokumenCreateManyDosenInput | DokumenCreateManyDosenInput[]
    skipDuplicates?: boolean
  }

  export type HomebaseUpsertWithoutDosenInput = {
    update: XOR<HomebaseUpdateWithoutDosenInput, HomebaseUncheckedUpdateWithoutDosenInput>
    create: XOR<HomebaseCreateWithoutDosenInput, HomebaseUncheckedCreateWithoutDosenInput>
    where?: HomebaseWhereInput
  }

  export type HomebaseUpdateToOneWithWhereWithoutDosenInput = {
    where?: HomebaseWhereInput
    data: XOR<HomebaseUpdateWithoutDosenInput, HomebaseUncheckedUpdateWithoutDosenInput>
  }

  export type HomebaseUpdateWithoutDosenInput = {
    nama?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomebaseUncheckedUpdateWithoutDosenInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUpsertWithWhereUniqueWithoutDosenInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutDosenInput, ReportUncheckedUpdateWithoutDosenInput>
    create: XOR<ReportCreateWithoutDosenInput, ReportUncheckedCreateWithoutDosenInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutDosenInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutDosenInput, ReportUncheckedUpdateWithoutDosenInput>
  }

  export type ReportUpdateManyWithWhereWithoutDosenInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutDosenInput>
  }

  export type DokumenUpsertWithWhereUniqueWithoutDosenInput = {
    where: DokumenWhereUniqueInput
    update: XOR<DokumenUpdateWithoutDosenInput, DokumenUncheckedUpdateWithoutDosenInput>
    create: XOR<DokumenCreateWithoutDosenInput, DokumenUncheckedCreateWithoutDosenInput>
  }

  export type DokumenUpdateWithWhereUniqueWithoutDosenInput = {
    where: DokumenWhereUniqueInput
    data: XOR<DokumenUpdateWithoutDosenInput, DokumenUncheckedUpdateWithoutDosenInput>
  }

  export type DokumenUpdateManyWithWhereWithoutDosenInput = {
    where: DokumenScalarWhereInput
    data: XOR<DokumenUpdateManyMutationInput, DokumenUncheckedUpdateManyWithoutDosenInput>
  }

  export type DokumenScalarWhereInput = {
    AND?: DokumenScalarWhereInput | DokumenScalarWhereInput[]
    OR?: DokumenScalarWhereInput[]
    NOT?: DokumenScalarWhereInput | DokumenScalarWhereInput[]
    id?: IntFilter<"Dokumen"> | number
    judul?: StringFilter<"Dokumen"> | string
    dokumenUrl?: StringFilter<"Dokumen"> | string
    dosenId?: IntFilter<"Dokumen"> | number
    createdAt?: DateTimeFilter<"Dokumen"> | Date | string
    updatedAt?: DateTimeFilter<"Dokumen"> | Date | string
  }

  export type DosenCreateWithoutReportInput = {
    nama: string
    nip: string
    jabatan: $Enums.Jabatan
    createdAt?: Date | string
    updatedAt?: Date | string
    homebase: HomebaseCreateNestedOneWithoutDosenInput
    Dokumen?: DokumenCreateNestedManyWithoutDosenInput
  }

  export type DosenUncheckedCreateWithoutReportInput = {
    id?: number
    nama: string
    nip: string
    jabatan: $Enums.Jabatan
    homebaseId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Dokumen?: DokumenUncheckedCreateNestedManyWithoutDosenInput
  }

  export type DosenCreateOrConnectWithoutReportInput = {
    where: DosenWhereUniqueInput
    create: XOR<DosenCreateWithoutReportInput, DosenUncheckedCreateWithoutReportInput>
  }

  export type PeriodeCreateWithoutReportInput = {
    periode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PeriodeUncheckedCreateWithoutReportInput = {
    id?: number
    periode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PeriodeCreateOrConnectWithoutReportInput = {
    where: PeriodeWhereUniqueInput
    create: XOR<PeriodeCreateWithoutReportInput, PeriodeUncheckedCreateWithoutReportInput>
  }

  export type PenilaianCreateWithoutReportInput = {
    nilai: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subKriteria: SubKriteriaCreateNestedOneWithoutPenilaianInput
    evaluator: UserCreateNestedOneWithoutPenilaianInput
  }

  export type PenilaianUncheckedCreateWithoutReportInput = {
    id?: number
    nilai: number
    subKriteriaId: number
    evaluatorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PenilaianCreateOrConnectWithoutReportInput = {
    where: PenilaianWhereUniqueInput
    create: XOR<PenilaianCreateWithoutReportInput, PenilaianUncheckedCreateWithoutReportInput>
  }

  export type PenilaianCreateManyReportInputEnvelope = {
    data: PenilaianCreateManyReportInput | PenilaianCreateManyReportInput[]
    skipDuplicates?: boolean
  }

  export type DosenUpsertWithoutReportInput = {
    update: XOR<DosenUpdateWithoutReportInput, DosenUncheckedUpdateWithoutReportInput>
    create: XOR<DosenCreateWithoutReportInput, DosenUncheckedCreateWithoutReportInput>
    where?: DosenWhereInput
  }

  export type DosenUpdateToOneWithWhereWithoutReportInput = {
    where?: DosenWhereInput
    data: XOR<DosenUpdateWithoutReportInput, DosenUncheckedUpdateWithoutReportInput>
  }

  export type DosenUpdateWithoutReportInput = {
    nama?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    jabatan?: EnumJabatanFieldUpdateOperationsInput | $Enums.Jabatan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    homebase?: HomebaseUpdateOneRequiredWithoutDosenNestedInput
    Dokumen?: DokumenUpdateManyWithoutDosenNestedInput
  }

  export type DosenUncheckedUpdateWithoutReportInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    jabatan?: EnumJabatanFieldUpdateOperationsInput | $Enums.Jabatan
    homebaseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Dokumen?: DokumenUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type PeriodeUpsertWithoutReportInput = {
    update: XOR<PeriodeUpdateWithoutReportInput, PeriodeUncheckedUpdateWithoutReportInput>
    create: XOR<PeriodeCreateWithoutReportInput, PeriodeUncheckedCreateWithoutReportInput>
    where?: PeriodeWhereInput
  }

  export type PeriodeUpdateToOneWithWhereWithoutReportInput = {
    where?: PeriodeWhereInput
    data: XOR<PeriodeUpdateWithoutReportInput, PeriodeUncheckedUpdateWithoutReportInput>
  }

  export type PeriodeUpdateWithoutReportInput = {
    periode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeriodeUncheckedUpdateWithoutReportInput = {
    id?: IntFieldUpdateOperationsInput | number
    periode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PenilaianUpsertWithWhereUniqueWithoutReportInput = {
    where: PenilaianWhereUniqueInput
    update: XOR<PenilaianUpdateWithoutReportInput, PenilaianUncheckedUpdateWithoutReportInput>
    create: XOR<PenilaianCreateWithoutReportInput, PenilaianUncheckedCreateWithoutReportInput>
  }

  export type PenilaianUpdateWithWhereUniqueWithoutReportInput = {
    where: PenilaianWhereUniqueInput
    data: XOR<PenilaianUpdateWithoutReportInput, PenilaianUncheckedUpdateWithoutReportInput>
  }

  export type PenilaianUpdateManyWithWhereWithoutReportInput = {
    where: PenilaianScalarWhereInput
    data: XOR<PenilaianUpdateManyMutationInput, PenilaianUncheckedUpdateManyWithoutReportInput>
  }

  export type KriteriaCreateWithoutSubKriteriaInput = {
    nama: string
    bobot: number
    deskripsi: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KriteriaUncheckedCreateWithoutSubKriteriaInput = {
    id?: number
    nama: string
    bobot: number
    deskripsi: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KriteriaCreateOrConnectWithoutSubKriteriaInput = {
    where: KriteriaWhereUniqueInput
    create: XOR<KriteriaCreateWithoutSubKriteriaInput, KriteriaUncheckedCreateWithoutSubKriteriaInput>
  }

  export type PenilaianCreateWithoutSubKriteriaInput = {
    nilai: number
    createdAt?: Date | string
    updatedAt?: Date | string
    report: ReportCreateNestedOneWithoutPenilaianInput
    evaluator: UserCreateNestedOneWithoutPenilaianInput
  }

  export type PenilaianUncheckedCreateWithoutSubKriteriaInput = {
    id?: number
    nilai: number
    reportId: number
    evaluatorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PenilaianCreateOrConnectWithoutSubKriteriaInput = {
    where: PenilaianWhereUniqueInput
    create: XOR<PenilaianCreateWithoutSubKriteriaInput, PenilaianUncheckedCreateWithoutSubKriteriaInput>
  }

  export type PenilaianCreateManySubKriteriaInputEnvelope = {
    data: PenilaianCreateManySubKriteriaInput | PenilaianCreateManySubKriteriaInput[]
    skipDuplicates?: boolean
  }

  export type KriteriaUpsertWithoutSubKriteriaInput = {
    update: XOR<KriteriaUpdateWithoutSubKriteriaInput, KriteriaUncheckedUpdateWithoutSubKriteriaInput>
    create: XOR<KriteriaCreateWithoutSubKriteriaInput, KriteriaUncheckedCreateWithoutSubKriteriaInput>
    where?: KriteriaWhereInput
  }

  export type KriteriaUpdateToOneWithWhereWithoutSubKriteriaInput = {
    where?: KriteriaWhereInput
    data: XOR<KriteriaUpdateWithoutSubKriteriaInput, KriteriaUncheckedUpdateWithoutSubKriteriaInput>
  }

  export type KriteriaUpdateWithoutSubKriteriaInput = {
    nama?: StringFieldUpdateOperationsInput | string
    bobot?: FloatFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KriteriaUncheckedUpdateWithoutSubKriteriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    bobot?: FloatFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PenilaianUpsertWithWhereUniqueWithoutSubKriteriaInput = {
    where: PenilaianWhereUniqueInput
    update: XOR<PenilaianUpdateWithoutSubKriteriaInput, PenilaianUncheckedUpdateWithoutSubKriteriaInput>
    create: XOR<PenilaianCreateWithoutSubKriteriaInput, PenilaianUncheckedCreateWithoutSubKriteriaInput>
  }

  export type PenilaianUpdateWithWhereUniqueWithoutSubKriteriaInput = {
    where: PenilaianWhereUniqueInput
    data: XOR<PenilaianUpdateWithoutSubKriteriaInput, PenilaianUncheckedUpdateWithoutSubKriteriaInput>
  }

  export type PenilaianUpdateManyWithWhereWithoutSubKriteriaInput = {
    where: PenilaianScalarWhereInput
    data: XOR<PenilaianUpdateManyMutationInput, PenilaianUncheckedUpdateManyWithoutSubKriteriaInput>
  }

  export type ReportCreateWithoutPenilaianInput = {
    nilaiAkhir?: number | null
    status: $Enums.ReportStatus
    deskripsi: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dosen: DosenCreateNestedOneWithoutReportInput
    periode: PeriodeCreateNestedOneWithoutReportInput
  }

  export type ReportUncheckedCreateWithoutPenilaianInput = {
    id?: number
    nilaiAkhir?: number | null
    status: $Enums.ReportStatus
    dosenId: number
    periodeId: number
    deskripsi: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportCreateOrConnectWithoutPenilaianInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutPenilaianInput, ReportUncheckedCreateWithoutPenilaianInput>
  }

  export type SubKriteriaCreateWithoutPenilaianInput = {
    nama: string
    nilaiMaksimal: number
    jenis: $Enums.JenisPenilaian
    createdAt?: Date | string
    updatedAt?: Date | string
    kriteria: KriteriaCreateNestedOneWithoutSubKriteriaInput
  }

  export type SubKriteriaUncheckedCreateWithoutPenilaianInput = {
    id?: number
    nama: string
    nilaiMaksimal: number
    kriteriaId: number
    jenis: $Enums.JenisPenilaian
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubKriteriaCreateOrConnectWithoutPenilaianInput = {
    where: SubKriteriaWhereUniqueInput
    create: XOR<SubKriteriaCreateWithoutPenilaianInput, SubKriteriaUncheckedCreateWithoutPenilaianInput>
  }

  export type UserCreateWithoutPenilaianInput = {
    username: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutPenilaianInput = {
    id?: number
    username: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutPenilaianInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPenilaianInput, UserUncheckedCreateWithoutPenilaianInput>
  }

  export type ReportUpsertWithoutPenilaianInput = {
    update: XOR<ReportUpdateWithoutPenilaianInput, ReportUncheckedUpdateWithoutPenilaianInput>
    create: XOR<ReportCreateWithoutPenilaianInput, ReportUncheckedCreateWithoutPenilaianInput>
    where?: ReportWhereInput
  }

  export type ReportUpdateToOneWithWhereWithoutPenilaianInput = {
    where?: ReportWhereInput
    data: XOR<ReportUpdateWithoutPenilaianInput, ReportUncheckedUpdateWithoutPenilaianInput>
  }

  export type ReportUpdateWithoutPenilaianInput = {
    nilaiAkhir?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    deskripsi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dosen?: DosenUpdateOneRequiredWithoutReportNestedInput
    periode?: PeriodeUpdateOneRequiredWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateWithoutPenilaianInput = {
    id?: IntFieldUpdateOperationsInput | number
    nilaiAkhir?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    dosenId?: IntFieldUpdateOperationsInput | number
    periodeId?: IntFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubKriteriaUpsertWithoutPenilaianInput = {
    update: XOR<SubKriteriaUpdateWithoutPenilaianInput, SubKriteriaUncheckedUpdateWithoutPenilaianInput>
    create: XOR<SubKriteriaCreateWithoutPenilaianInput, SubKriteriaUncheckedCreateWithoutPenilaianInput>
    where?: SubKriteriaWhereInput
  }

  export type SubKriteriaUpdateToOneWithWhereWithoutPenilaianInput = {
    where?: SubKriteriaWhereInput
    data: XOR<SubKriteriaUpdateWithoutPenilaianInput, SubKriteriaUncheckedUpdateWithoutPenilaianInput>
  }

  export type SubKriteriaUpdateWithoutPenilaianInput = {
    nama?: StringFieldUpdateOperationsInput | string
    nilaiMaksimal?: IntFieldUpdateOperationsInput | number
    jenis?: EnumJenisPenilaianFieldUpdateOperationsInput | $Enums.JenisPenilaian
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kriteria?: KriteriaUpdateOneRequiredWithoutSubKriteriaNestedInput
  }

  export type SubKriteriaUncheckedUpdateWithoutPenilaianInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    nilaiMaksimal?: IntFieldUpdateOperationsInput | number
    kriteriaId?: IntFieldUpdateOperationsInput | number
    jenis?: EnumJenisPenilaianFieldUpdateOperationsInput | $Enums.JenisPenilaian
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutPenilaianInput = {
    update: XOR<UserUpdateWithoutPenilaianInput, UserUncheckedUpdateWithoutPenilaianInput>
    create: XOR<UserCreateWithoutPenilaianInput, UserUncheckedCreateWithoutPenilaianInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPenilaianInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPenilaianInput, UserUncheckedUpdateWithoutPenilaianInput>
  }

  export type UserUpdateWithoutPenilaianInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutPenilaianInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DosenCreateWithoutDokumenInput = {
    nama: string
    nip: string
    jabatan: $Enums.Jabatan
    createdAt?: Date | string
    updatedAt?: Date | string
    homebase: HomebaseCreateNestedOneWithoutDosenInput
    Report?: ReportCreateNestedManyWithoutDosenInput
  }

  export type DosenUncheckedCreateWithoutDokumenInput = {
    id?: number
    nama: string
    nip: string
    jabatan: $Enums.Jabatan
    homebaseId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Report?: ReportUncheckedCreateNestedManyWithoutDosenInput
  }

  export type DosenCreateOrConnectWithoutDokumenInput = {
    where: DosenWhereUniqueInput
    create: XOR<DosenCreateWithoutDokumenInput, DosenUncheckedCreateWithoutDokumenInput>
  }

  export type DosenUpsertWithoutDokumenInput = {
    update: XOR<DosenUpdateWithoutDokumenInput, DosenUncheckedUpdateWithoutDokumenInput>
    create: XOR<DosenCreateWithoutDokumenInput, DosenUncheckedCreateWithoutDokumenInput>
    where?: DosenWhereInput
  }

  export type DosenUpdateToOneWithWhereWithoutDokumenInput = {
    where?: DosenWhereInput
    data: XOR<DosenUpdateWithoutDokumenInput, DosenUncheckedUpdateWithoutDokumenInput>
  }

  export type DosenUpdateWithoutDokumenInput = {
    nama?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    jabatan?: EnumJabatanFieldUpdateOperationsInput | $Enums.Jabatan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    homebase?: HomebaseUpdateOneRequiredWithoutDosenNestedInput
    Report?: ReportUpdateManyWithoutDosenNestedInput
  }

  export type DosenUncheckedUpdateWithoutDokumenInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    jabatan?: EnumJabatanFieldUpdateOperationsInput | $Enums.Jabatan
    homebaseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Report?: ReportUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type PenilaianCreateManyEvaluatorInput = {
    id?: number
    nilai: number
    reportId: number
    subKriteriaId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PenilaianUpdateWithoutEvaluatorInput = {
    nilai?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    report?: ReportUpdateOneRequiredWithoutPenilaianNestedInput
    subKriteria?: SubKriteriaUpdateOneRequiredWithoutPenilaianNestedInput
  }

  export type PenilaianUncheckedUpdateWithoutEvaluatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nilai?: FloatFieldUpdateOperationsInput | number
    reportId?: IntFieldUpdateOperationsInput | number
    subKriteriaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PenilaianUncheckedUpdateManyWithoutEvaluatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nilai?: FloatFieldUpdateOperationsInput | number
    reportId?: IntFieldUpdateOperationsInput | number
    subKriteriaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateManyPeriodeInput = {
    id?: number
    nilaiAkhir?: number | null
    status: $Enums.ReportStatus
    dosenId: number
    deskripsi: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportUpdateWithoutPeriodeInput = {
    nilaiAkhir?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    deskripsi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dosen?: DosenUpdateOneRequiredWithoutReportNestedInput
    Penilaian?: PenilaianUpdateManyWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateWithoutPeriodeInput = {
    id?: IntFieldUpdateOperationsInput | number
    nilaiAkhir?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    dosenId?: IntFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Penilaian?: PenilaianUncheckedUpdateManyWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateManyWithoutPeriodeInput = {
    id?: IntFieldUpdateOperationsInput | number
    nilaiAkhir?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    dosenId?: IntFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DosenCreateManyHomebaseInput = {
    id?: number
    nama: string
    nip: string
    jabatan: $Enums.Jabatan
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DosenUpdateWithoutHomebaseInput = {
    nama?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    jabatan?: EnumJabatanFieldUpdateOperationsInput | $Enums.Jabatan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Report?: ReportUpdateManyWithoutDosenNestedInput
    Dokumen?: DokumenUpdateManyWithoutDosenNestedInput
  }

  export type DosenUncheckedUpdateWithoutHomebaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    jabatan?: EnumJabatanFieldUpdateOperationsInput | $Enums.Jabatan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Report?: ReportUncheckedUpdateManyWithoutDosenNestedInput
    Dokumen?: DokumenUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type DosenUncheckedUpdateManyWithoutHomebaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    jabatan?: EnumJabatanFieldUpdateOperationsInput | $Enums.Jabatan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubKriteriaCreateManyKriteriaInput = {
    id?: number
    nama: string
    nilaiMaksimal: number
    jenis: $Enums.JenisPenilaian
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubKriteriaUpdateWithoutKriteriaInput = {
    nama?: StringFieldUpdateOperationsInput | string
    nilaiMaksimal?: IntFieldUpdateOperationsInput | number
    jenis?: EnumJenisPenilaianFieldUpdateOperationsInput | $Enums.JenisPenilaian
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Penilaian?: PenilaianUpdateManyWithoutSubKriteriaNestedInput
  }

  export type SubKriteriaUncheckedUpdateWithoutKriteriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    nilaiMaksimal?: IntFieldUpdateOperationsInput | number
    jenis?: EnumJenisPenilaianFieldUpdateOperationsInput | $Enums.JenisPenilaian
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Penilaian?: PenilaianUncheckedUpdateManyWithoutSubKriteriaNestedInput
  }

  export type SubKriteriaUncheckedUpdateManyWithoutKriteriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    nilaiMaksimal?: IntFieldUpdateOperationsInput | number
    jenis?: EnumJenisPenilaianFieldUpdateOperationsInput | $Enums.JenisPenilaian
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateManyDosenInput = {
    id?: number
    nilaiAkhir?: number | null
    status: $Enums.ReportStatus
    periodeId: number
    deskripsi: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DokumenCreateManyDosenInput = {
    id?: number
    judul: string
    dokumenUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportUpdateWithoutDosenInput = {
    nilaiAkhir?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    deskripsi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    periode?: PeriodeUpdateOneRequiredWithoutReportNestedInput
    Penilaian?: PenilaianUpdateManyWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateWithoutDosenInput = {
    id?: IntFieldUpdateOperationsInput | number
    nilaiAkhir?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    periodeId?: IntFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Penilaian?: PenilaianUncheckedUpdateManyWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateManyWithoutDosenInput = {
    id?: IntFieldUpdateOperationsInput | number
    nilaiAkhir?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    periodeId?: IntFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DokumenUpdateWithoutDosenInput = {
    judul?: StringFieldUpdateOperationsInput | string
    dokumenUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DokumenUncheckedUpdateWithoutDosenInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    dokumenUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DokumenUncheckedUpdateManyWithoutDosenInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    dokumenUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PenilaianCreateManyReportInput = {
    id?: number
    nilai: number
    subKriteriaId: number
    evaluatorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PenilaianUpdateWithoutReportInput = {
    nilai?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subKriteria?: SubKriteriaUpdateOneRequiredWithoutPenilaianNestedInput
    evaluator?: UserUpdateOneRequiredWithoutPenilaianNestedInput
  }

  export type PenilaianUncheckedUpdateWithoutReportInput = {
    id?: IntFieldUpdateOperationsInput | number
    nilai?: FloatFieldUpdateOperationsInput | number
    subKriteriaId?: IntFieldUpdateOperationsInput | number
    evaluatorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PenilaianUncheckedUpdateManyWithoutReportInput = {
    id?: IntFieldUpdateOperationsInput | number
    nilai?: FloatFieldUpdateOperationsInput | number
    subKriteriaId?: IntFieldUpdateOperationsInput | number
    evaluatorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PenilaianCreateManySubKriteriaInput = {
    id?: number
    nilai: number
    reportId: number
    evaluatorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PenilaianUpdateWithoutSubKriteriaInput = {
    nilai?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    report?: ReportUpdateOneRequiredWithoutPenilaianNestedInput
    evaluator?: UserUpdateOneRequiredWithoutPenilaianNestedInput
  }

  export type PenilaianUncheckedUpdateWithoutSubKriteriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nilai?: FloatFieldUpdateOperationsInput | number
    reportId?: IntFieldUpdateOperationsInput | number
    evaluatorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PenilaianUncheckedUpdateManyWithoutSubKriteriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nilai?: FloatFieldUpdateOperationsInput | number
    reportId?: IntFieldUpdateOperationsInput | number
    evaluatorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}