
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Repository
 * 
 */
export type Repository = $Result.DefaultSelection<Prisma.$RepositoryPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Suggestion
 * 
 */
export type Suggestion = $Result.DefaultSelection<Prisma.$SuggestionPayload>
/**
 * Model WebhookEvent
 * 
 */
export type WebhookEvent = $Result.DefaultSelection<Prisma.$WebhookEventPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ReviewStatus: {
  pending: 'pending',
  processing: 'processing',
  completed: 'completed',
  failed: 'failed',
  partial: 'partial'
};

export type ReviewStatus = (typeof ReviewStatus)[keyof typeof ReviewStatus]


export const Severity: {
  low: 'low',
  medium: 'medium',
  high: 'high'
};

export type Severity = (typeof Severity)[keyof typeof Severity]


export const Feedback: {
  accepted: 'accepted',
  rejected: 'rejected'
};

export type Feedback = (typeof Feedback)[keyof typeof Feedback]

}

export type ReviewStatus = $Enums.ReviewStatus

export const ReviewStatus: typeof $Enums.ReviewStatus

export type Severity = $Enums.Severity

export const Severity: typeof $Enums.Severity

export type Feedback = $Enums.Feedback

export const Feedback: typeof $Enums.Feedback

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Repositories
 * const repositories = await prisma.repository.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Repositories
   * const repositories = await prisma.repository.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.repository`: Exposes CRUD operations for the **Repository** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Repositories
    * const repositories = await prisma.repository.findMany()
    * ```
    */
  get repository(): Prisma.RepositoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.suggestion`: Exposes CRUD operations for the **Suggestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suggestions
    * const suggestions = await prisma.suggestion.findMany()
    * ```
    */
  get suggestion(): Prisma.SuggestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.webhookEvent`: Exposes CRUD operations for the **WebhookEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WebhookEvents
    * const webhookEvents = await prisma.webhookEvent.findMany()
    * ```
    */
  get webhookEvent(): Prisma.WebhookEventDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Repository: 'Repository',
    Review: 'Review',
    Suggestion: 'Suggestion',
    WebhookEvent: 'WebhookEvent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "repository" | "review" | "suggestion" | "webhookEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Repository: {
        payload: Prisma.$RepositoryPayload<ExtArgs>
        fields: Prisma.RepositoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RepositoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RepositoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          findFirst: {
            args: Prisma.RepositoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RepositoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          findMany: {
            args: Prisma.RepositoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>[]
          }
          create: {
            args: Prisma.RepositoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          createMany: {
            args: Prisma.RepositoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RepositoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>[]
          }
          delete: {
            args: Prisma.RepositoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          update: {
            args: Prisma.RepositoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          deleteMany: {
            args: Prisma.RepositoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RepositoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RepositoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>[]
          }
          upsert: {
            args: Prisma.RepositoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          aggregate: {
            args: Prisma.RepositoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRepository>
          }
          groupBy: {
            args: Prisma.RepositoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<RepositoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.RepositoryCountArgs<ExtArgs>
            result: $Utils.Optional<RepositoryCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Suggestion: {
        payload: Prisma.$SuggestionPayload<ExtArgs>
        fields: Prisma.SuggestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SuggestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SuggestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>
          }
          findFirst: {
            args: Prisma.SuggestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SuggestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>
          }
          findMany: {
            args: Prisma.SuggestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>[]
          }
          create: {
            args: Prisma.SuggestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>
          }
          createMany: {
            args: Prisma.SuggestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SuggestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>[]
          }
          delete: {
            args: Prisma.SuggestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>
          }
          update: {
            args: Prisma.SuggestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>
          }
          deleteMany: {
            args: Prisma.SuggestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SuggestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SuggestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>[]
          }
          upsert: {
            args: Prisma.SuggestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>
          }
          aggregate: {
            args: Prisma.SuggestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuggestion>
          }
          groupBy: {
            args: Prisma.SuggestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuggestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SuggestionCountArgs<ExtArgs>
            result: $Utils.Optional<SuggestionCountAggregateOutputType> | number
          }
        }
      }
      WebhookEvent: {
        payload: Prisma.$WebhookEventPayload<ExtArgs>
        fields: Prisma.WebhookEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebhookEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebhookEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>
          }
          findFirst: {
            args: Prisma.WebhookEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebhookEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>
          }
          findMany: {
            args: Prisma.WebhookEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>[]
          }
          create: {
            args: Prisma.WebhookEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>
          }
          createMany: {
            args: Prisma.WebhookEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebhookEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>[]
          }
          delete: {
            args: Prisma.WebhookEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>
          }
          update: {
            args: Prisma.WebhookEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>
          }
          deleteMany: {
            args: Prisma.WebhookEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebhookEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WebhookEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>[]
          }
          upsert: {
            args: Prisma.WebhookEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>
          }
          aggregate: {
            args: Prisma.WebhookEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebhookEvent>
          }
          groupBy: {
            args: Prisma.WebhookEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebhookEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebhookEventCountArgs<ExtArgs>
            result: $Utils.Optional<WebhookEventCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    repository?: RepositoryOmit
    review?: ReviewOmit
    suggestion?: SuggestionOmit
    webhookEvent?: WebhookEventOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type RepositoryCountOutputType
   */

  export type RepositoryCountOutputType = {
    reviews: number
  }

  export type RepositoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | RepositoryCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * RepositoryCountOutputType without action
   */
  export type RepositoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepositoryCountOutputType
     */
    select?: RepositoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RepositoryCountOutputType without action
   */
  export type RepositoryCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type ReviewCountOutputType
   */

  export type ReviewCountOutputType = {
    suggestions: number
  }

  export type ReviewCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suggestions?: boolean | ReviewCountOutputTypeCountSuggestionsArgs
  }

  // Custom InputTypes
  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewCountOutputType
     */
    select?: ReviewCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeCountSuggestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuggestionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Repository
   */

  export type AggregateRepository = {
    _count: RepositoryCountAggregateOutputType | null
    _avg: RepositoryAvgAggregateOutputType | null
    _sum: RepositorySumAggregateOutputType | null
    _min: RepositoryMinAggregateOutputType | null
    _max: RepositoryMaxAggregateOutputType | null
  }

  export type RepositoryAvgAggregateOutputType = {
    id: number | null
    githubRepoId: number | null
  }

  export type RepositorySumAggregateOutputType = {
    id: number | null
    githubRepoId: bigint | null
  }

  export type RepositoryMinAggregateOutputType = {
    id: number | null
    githubRepoId: bigint | null
    fullName: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type RepositoryMaxAggregateOutputType = {
    id: number | null
    githubRepoId: bigint | null
    fullName: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type RepositoryCountAggregateOutputType = {
    id: number
    githubRepoId: number
    fullName: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type RepositoryAvgAggregateInputType = {
    id?: true
    githubRepoId?: true
  }

  export type RepositorySumAggregateInputType = {
    id?: true
    githubRepoId?: true
  }

  export type RepositoryMinAggregateInputType = {
    id?: true
    githubRepoId?: true
    fullName?: true
    isActive?: true
    createdAt?: true
  }

  export type RepositoryMaxAggregateInputType = {
    id?: true
    githubRepoId?: true
    fullName?: true
    isActive?: true
    createdAt?: true
  }

  export type RepositoryCountAggregateInputType = {
    id?: true
    githubRepoId?: true
    fullName?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type RepositoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Repository to aggregate.
     */
    where?: RepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repositories to fetch.
     */
    orderBy?: RepositoryOrderByWithRelationInput | RepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repositories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Repositories
    **/
    _count?: true | RepositoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RepositoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RepositorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RepositoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RepositoryMaxAggregateInputType
  }

  export type GetRepositoryAggregateType<T extends RepositoryAggregateArgs> = {
        [P in keyof T & keyof AggregateRepository]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepository[P]>
      : GetScalarType<T[P], AggregateRepository[P]>
  }




  export type RepositoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepositoryWhereInput
    orderBy?: RepositoryOrderByWithAggregationInput | RepositoryOrderByWithAggregationInput[]
    by: RepositoryScalarFieldEnum[] | RepositoryScalarFieldEnum
    having?: RepositoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RepositoryCountAggregateInputType | true
    _avg?: RepositoryAvgAggregateInputType
    _sum?: RepositorySumAggregateInputType
    _min?: RepositoryMinAggregateInputType
    _max?: RepositoryMaxAggregateInputType
  }

  export type RepositoryGroupByOutputType = {
    id: number
    githubRepoId: bigint
    fullName: string
    isActive: boolean
    createdAt: Date
    _count: RepositoryCountAggregateOutputType | null
    _avg: RepositoryAvgAggregateOutputType | null
    _sum: RepositorySumAggregateOutputType | null
    _min: RepositoryMinAggregateOutputType | null
    _max: RepositoryMaxAggregateOutputType | null
  }

  type GetRepositoryGroupByPayload<T extends RepositoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RepositoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RepositoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RepositoryGroupByOutputType[P]>
            : GetScalarType<T[P], RepositoryGroupByOutputType[P]>
        }
      >
    >


  export type RepositorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    githubRepoId?: boolean
    fullName?: boolean
    isActive?: boolean
    createdAt?: boolean
    reviews?: boolean | Repository$reviewsArgs<ExtArgs>
    _count?: boolean | RepositoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repository"]>

  export type RepositorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    githubRepoId?: boolean
    fullName?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["repository"]>

  export type RepositorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    githubRepoId?: boolean
    fullName?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["repository"]>

  export type RepositorySelectScalar = {
    id?: boolean
    githubRepoId?: boolean
    fullName?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type RepositoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "githubRepoId" | "fullName" | "isActive" | "createdAt", ExtArgs["result"]["repository"]>
  export type RepositoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | Repository$reviewsArgs<ExtArgs>
    _count?: boolean | RepositoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RepositoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RepositoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RepositoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Repository"
    objects: {
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      githubRepoId: bigint
      fullName: string
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["repository"]>
    composites: {}
  }

  type RepositoryGetPayload<S extends boolean | null | undefined | RepositoryDefaultArgs> = $Result.GetResult<Prisma.$RepositoryPayload, S>

  type RepositoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RepositoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RepositoryCountAggregateInputType | true
    }

  export interface RepositoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Repository'], meta: { name: 'Repository' } }
    /**
     * Find zero or one Repository that matches the filter.
     * @param {RepositoryFindUniqueArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RepositoryFindUniqueArgs>(args: SelectSubset<T, RepositoryFindUniqueArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Repository that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RepositoryFindUniqueOrThrowArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RepositoryFindUniqueOrThrowArgs>(args: SelectSubset<T, RepositoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Repository that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryFindFirstArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RepositoryFindFirstArgs>(args?: SelectSubset<T, RepositoryFindFirstArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Repository that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryFindFirstOrThrowArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RepositoryFindFirstOrThrowArgs>(args?: SelectSubset<T, RepositoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Repositories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Repositories
     * const repositories = await prisma.repository.findMany()
     * 
     * // Get first 10 Repositories
     * const repositories = await prisma.repository.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const repositoryWithIdOnly = await prisma.repository.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RepositoryFindManyArgs>(args?: SelectSubset<T, RepositoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Repository.
     * @param {RepositoryCreateArgs} args - Arguments to create a Repository.
     * @example
     * // Create one Repository
     * const Repository = await prisma.repository.create({
     *   data: {
     *     // ... data to create a Repository
     *   }
     * })
     * 
     */
    create<T extends RepositoryCreateArgs>(args: SelectSubset<T, RepositoryCreateArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Repositories.
     * @param {RepositoryCreateManyArgs} args - Arguments to create many Repositories.
     * @example
     * // Create many Repositories
     * const repository = await prisma.repository.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RepositoryCreateManyArgs>(args?: SelectSubset<T, RepositoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Repositories and returns the data saved in the database.
     * @param {RepositoryCreateManyAndReturnArgs} args - Arguments to create many Repositories.
     * @example
     * // Create many Repositories
     * const repository = await prisma.repository.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Repositories and only return the `id`
     * const repositoryWithIdOnly = await prisma.repository.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RepositoryCreateManyAndReturnArgs>(args?: SelectSubset<T, RepositoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Repository.
     * @param {RepositoryDeleteArgs} args - Arguments to delete one Repository.
     * @example
     * // Delete one Repository
     * const Repository = await prisma.repository.delete({
     *   where: {
     *     // ... filter to delete one Repository
     *   }
     * })
     * 
     */
    delete<T extends RepositoryDeleteArgs>(args: SelectSubset<T, RepositoryDeleteArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Repository.
     * @param {RepositoryUpdateArgs} args - Arguments to update one Repository.
     * @example
     * // Update one Repository
     * const repository = await prisma.repository.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RepositoryUpdateArgs>(args: SelectSubset<T, RepositoryUpdateArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Repositories.
     * @param {RepositoryDeleteManyArgs} args - Arguments to filter Repositories to delete.
     * @example
     * // Delete a few Repositories
     * const { count } = await prisma.repository.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RepositoryDeleteManyArgs>(args?: SelectSubset<T, RepositoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Repositories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Repositories
     * const repository = await prisma.repository.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RepositoryUpdateManyArgs>(args: SelectSubset<T, RepositoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Repositories and returns the data updated in the database.
     * @param {RepositoryUpdateManyAndReturnArgs} args - Arguments to update many Repositories.
     * @example
     * // Update many Repositories
     * const repository = await prisma.repository.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Repositories and only return the `id`
     * const repositoryWithIdOnly = await prisma.repository.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RepositoryUpdateManyAndReturnArgs>(args: SelectSubset<T, RepositoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Repository.
     * @param {RepositoryUpsertArgs} args - Arguments to update or create a Repository.
     * @example
     * // Update or create a Repository
     * const repository = await prisma.repository.upsert({
     *   create: {
     *     // ... data to create a Repository
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Repository we want to update
     *   }
     * })
     */
    upsert<T extends RepositoryUpsertArgs>(args: SelectSubset<T, RepositoryUpsertArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Repositories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryCountArgs} args - Arguments to filter Repositories to count.
     * @example
     * // Count the number of Repositories
     * const count = await prisma.repository.count({
     *   where: {
     *     // ... the filter for the Repositories we want to count
     *   }
     * })
    **/
    count<T extends RepositoryCountArgs>(
      args?: Subset<T, RepositoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RepositoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Repository.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RepositoryAggregateArgs>(args: Subset<T, RepositoryAggregateArgs>): Prisma.PrismaPromise<GetRepositoryAggregateType<T>>

    /**
     * Group by Repository.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryGroupByArgs} args - Group by arguments.
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
      T extends RepositoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RepositoryGroupByArgs['orderBy'] }
        : { orderBy?: RepositoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RepositoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepositoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Repository model
   */
  readonly fields: RepositoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Repository.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RepositoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviews<T extends Repository$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Repository$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Repository model
   */
  interface RepositoryFieldRefs {
    readonly id: FieldRef<"Repository", 'Int'>
    readonly githubRepoId: FieldRef<"Repository", 'BigInt'>
    readonly fullName: FieldRef<"Repository", 'String'>
    readonly isActive: FieldRef<"Repository", 'Boolean'>
    readonly createdAt: FieldRef<"Repository", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Repository findUnique
   */
  export type RepositoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repository to fetch.
     */
    where: RepositoryWhereUniqueInput
  }

  /**
   * Repository findUniqueOrThrow
   */
  export type RepositoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repository to fetch.
     */
    where: RepositoryWhereUniqueInput
  }

  /**
   * Repository findFirst
   */
  export type RepositoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repository to fetch.
     */
    where?: RepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repositories to fetch.
     */
    orderBy?: RepositoryOrderByWithRelationInput | RepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Repositories.
     */
    cursor?: RepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repositories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Repositories.
     */
    distinct?: RepositoryScalarFieldEnum | RepositoryScalarFieldEnum[]
  }

  /**
   * Repository findFirstOrThrow
   */
  export type RepositoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repository to fetch.
     */
    where?: RepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repositories to fetch.
     */
    orderBy?: RepositoryOrderByWithRelationInput | RepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Repositories.
     */
    cursor?: RepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repositories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Repositories.
     */
    distinct?: RepositoryScalarFieldEnum | RepositoryScalarFieldEnum[]
  }

  /**
   * Repository findMany
   */
  export type RepositoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repositories to fetch.
     */
    where?: RepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repositories to fetch.
     */
    orderBy?: RepositoryOrderByWithRelationInput | RepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Repositories.
     */
    cursor?: RepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repositories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Repositories.
     */
    distinct?: RepositoryScalarFieldEnum | RepositoryScalarFieldEnum[]
  }

  /**
   * Repository create
   */
  export type RepositoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Repository.
     */
    data: XOR<RepositoryCreateInput, RepositoryUncheckedCreateInput>
  }

  /**
   * Repository createMany
   */
  export type RepositoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Repositories.
     */
    data: RepositoryCreateManyInput | RepositoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Repository createManyAndReturn
   */
  export type RepositoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * The data used to create many Repositories.
     */
    data: RepositoryCreateManyInput | RepositoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Repository update
   */
  export type RepositoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Repository.
     */
    data: XOR<RepositoryUpdateInput, RepositoryUncheckedUpdateInput>
    /**
     * Choose, which Repository to update.
     */
    where: RepositoryWhereUniqueInput
  }

  /**
   * Repository updateMany
   */
  export type RepositoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Repositories.
     */
    data: XOR<RepositoryUpdateManyMutationInput, RepositoryUncheckedUpdateManyInput>
    /**
     * Filter which Repositories to update
     */
    where?: RepositoryWhereInput
    /**
     * Limit how many Repositories to update.
     */
    limit?: number
  }

  /**
   * Repository updateManyAndReturn
   */
  export type RepositoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * The data used to update Repositories.
     */
    data: XOR<RepositoryUpdateManyMutationInput, RepositoryUncheckedUpdateManyInput>
    /**
     * Filter which Repositories to update
     */
    where?: RepositoryWhereInput
    /**
     * Limit how many Repositories to update.
     */
    limit?: number
  }

  /**
   * Repository upsert
   */
  export type RepositoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Repository to update in case it exists.
     */
    where: RepositoryWhereUniqueInput
    /**
     * In case the Repository found by the `where` argument doesn't exist, create a new Repository with this data.
     */
    create: XOR<RepositoryCreateInput, RepositoryUncheckedCreateInput>
    /**
     * In case the Repository was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RepositoryUpdateInput, RepositoryUncheckedUpdateInput>
  }

  /**
   * Repository delete
   */
  export type RepositoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter which Repository to delete.
     */
    where: RepositoryWhereUniqueInput
  }

  /**
   * Repository deleteMany
   */
  export type RepositoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Repositories to delete
     */
    where?: RepositoryWhereInput
    /**
     * Limit how many Repositories to delete.
     */
    limit?: number
  }

  /**
   * Repository.reviews
   */
  export type Repository$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Repository without action
   */
  export type RepositoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    repoId: number | null
    prNumber: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    repoId: number | null
    prNumber: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    repoId: number | null
    prNumber: number | null
    prTitle: string | null
    prAuthor: string | null
    githubDelivery: string | null
    status: $Enums.ReviewStatus | null
    errorMessage: string | null
    createdAt: Date | null
    completedAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    repoId: number | null
    prNumber: number | null
    prTitle: string | null
    prAuthor: string | null
    githubDelivery: string | null
    status: $Enums.ReviewStatus | null
    errorMessage: string | null
    createdAt: Date | null
    completedAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    repoId: number
    prNumber: number
    prTitle: number
    prAuthor: number
    githubDelivery: number
    status: number
    errorMessage: number
    createdAt: number
    completedAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    repoId?: true
    prNumber?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    repoId?: true
    prNumber?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    repoId?: true
    prNumber?: true
    prTitle?: true
    prAuthor?: true
    githubDelivery?: true
    status?: true
    errorMessage?: true
    createdAt?: true
    completedAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    repoId?: true
    prNumber?: true
    prTitle?: true
    prAuthor?: true
    githubDelivery?: true
    status?: true
    errorMessage?: true
    createdAt?: true
    completedAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    repoId?: true
    prNumber?: true
    prTitle?: true
    prAuthor?: true
    githubDelivery?: true
    status?: true
    errorMessage?: true
    createdAt?: true
    completedAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    repoId: number
    prNumber: number
    prTitle: string | null
    prAuthor: string | null
    githubDelivery: string | null
    status: $Enums.ReviewStatus
    errorMessage: string | null
    createdAt: Date
    completedAt: Date | null
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    repoId?: boolean
    prNumber?: boolean
    prTitle?: boolean
    prAuthor?: boolean
    githubDelivery?: boolean
    status?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    completedAt?: boolean
    repo?: boolean | RepositoryDefaultArgs<ExtArgs>
    suggestions?: boolean | Review$suggestionsArgs<ExtArgs>
    _count?: boolean | ReviewCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    repoId?: boolean
    prNumber?: boolean
    prTitle?: boolean
    prAuthor?: boolean
    githubDelivery?: boolean
    status?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    completedAt?: boolean
    repo?: boolean | RepositoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    repoId?: boolean
    prNumber?: boolean
    prTitle?: boolean
    prAuthor?: boolean
    githubDelivery?: boolean
    status?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    completedAt?: boolean
    repo?: boolean | RepositoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    repoId?: boolean
    prNumber?: boolean
    prTitle?: boolean
    prAuthor?: boolean
    githubDelivery?: boolean
    status?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    completedAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "repoId" | "prNumber" | "prTitle" | "prAuthor" | "githubDelivery" | "status" | "errorMessage" | "createdAt" | "completedAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repo?: boolean | RepositoryDefaultArgs<ExtArgs>
    suggestions?: boolean | Review$suggestionsArgs<ExtArgs>
    _count?: boolean | ReviewCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repo?: boolean | RepositoryDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repo?: boolean | RepositoryDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      repo: Prisma.$RepositoryPayload<ExtArgs>
      suggestions: Prisma.$SuggestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      repoId: number
      prNumber: number
      prTitle: string | null
      prAuthor: string | null
      githubDelivery: string | null
      status: $Enums.ReviewStatus
      errorMessage: string | null
      createdAt: Date
      completedAt: Date | null
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    repo<T extends RepositoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RepositoryDefaultArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    suggestions<T extends Review$suggestionsArgs<ExtArgs> = {}>(args?: Subset<T, Review$suggestionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly repoId: FieldRef<"Review", 'Int'>
    readonly prNumber: FieldRef<"Review", 'Int'>
    readonly prTitle: FieldRef<"Review", 'String'>
    readonly prAuthor: FieldRef<"Review", 'String'>
    readonly githubDelivery: FieldRef<"Review", 'String'>
    readonly status: FieldRef<"Review", 'ReviewStatus'>
    readonly errorMessage: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly completedAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review.suggestions
   */
  export type Review$suggestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suggestion
     */
    omit?: SuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    where?: SuggestionWhereInput
    orderBy?: SuggestionOrderByWithRelationInput | SuggestionOrderByWithRelationInput[]
    cursor?: SuggestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SuggestionScalarFieldEnum | SuggestionScalarFieldEnum[]
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Suggestion
   */

  export type AggregateSuggestion = {
    _count: SuggestionCountAggregateOutputType | null
    _avg: SuggestionAvgAggregateOutputType | null
    _sum: SuggestionSumAggregateOutputType | null
    _min: SuggestionMinAggregateOutputType | null
    _max: SuggestionMaxAggregateOutputType | null
  }

  export type SuggestionAvgAggregateOutputType = {
    id: number | null
    reviewId: number | null
    lineNumber: number | null
  }

  export type SuggestionSumAggregateOutputType = {
    id: number | null
    reviewId: number | null
    lineNumber: number | null
  }

  export type SuggestionMinAggregateOutputType = {
    id: number | null
    reviewId: number | null
    filePath: string | null
    lineNumber: number | null
    category: string | null
    severity: $Enums.Severity | null
    message: string | null
    explanation: string | null
    feedback: $Enums.Feedback | null
    createdAt: Date | null
  }

  export type SuggestionMaxAggregateOutputType = {
    id: number | null
    reviewId: number | null
    filePath: string | null
    lineNumber: number | null
    category: string | null
    severity: $Enums.Severity | null
    message: string | null
    explanation: string | null
    feedback: $Enums.Feedback | null
    createdAt: Date | null
  }

  export type SuggestionCountAggregateOutputType = {
    id: number
    reviewId: number
    filePath: number
    lineNumber: number
    category: number
    severity: number
    message: number
    explanation: number
    feedback: number
    createdAt: number
    _all: number
  }


  export type SuggestionAvgAggregateInputType = {
    id?: true
    reviewId?: true
    lineNumber?: true
  }

  export type SuggestionSumAggregateInputType = {
    id?: true
    reviewId?: true
    lineNumber?: true
  }

  export type SuggestionMinAggregateInputType = {
    id?: true
    reviewId?: true
    filePath?: true
    lineNumber?: true
    category?: true
    severity?: true
    message?: true
    explanation?: true
    feedback?: true
    createdAt?: true
  }

  export type SuggestionMaxAggregateInputType = {
    id?: true
    reviewId?: true
    filePath?: true
    lineNumber?: true
    category?: true
    severity?: true
    message?: true
    explanation?: true
    feedback?: true
    createdAt?: true
  }

  export type SuggestionCountAggregateInputType = {
    id?: true
    reviewId?: true
    filePath?: true
    lineNumber?: true
    category?: true
    severity?: true
    message?: true
    explanation?: true
    feedback?: true
    createdAt?: true
    _all?: true
  }

  export type SuggestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suggestion to aggregate.
     */
    where?: SuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suggestions to fetch.
     */
    orderBy?: SuggestionOrderByWithRelationInput | SuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suggestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suggestions
    **/
    _count?: true | SuggestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SuggestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SuggestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuggestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuggestionMaxAggregateInputType
  }

  export type GetSuggestionAggregateType<T extends SuggestionAggregateArgs> = {
        [P in keyof T & keyof AggregateSuggestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuggestion[P]>
      : GetScalarType<T[P], AggregateSuggestion[P]>
  }




  export type SuggestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuggestionWhereInput
    orderBy?: SuggestionOrderByWithAggregationInput | SuggestionOrderByWithAggregationInput[]
    by: SuggestionScalarFieldEnum[] | SuggestionScalarFieldEnum
    having?: SuggestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuggestionCountAggregateInputType | true
    _avg?: SuggestionAvgAggregateInputType
    _sum?: SuggestionSumAggregateInputType
    _min?: SuggestionMinAggregateInputType
    _max?: SuggestionMaxAggregateInputType
  }

  export type SuggestionGroupByOutputType = {
    id: number
    reviewId: number
    filePath: string | null
    lineNumber: number | null
    category: string
    severity: $Enums.Severity
    message: string
    explanation: string | null
    feedback: $Enums.Feedback | null
    createdAt: Date
    _count: SuggestionCountAggregateOutputType | null
    _avg: SuggestionAvgAggregateOutputType | null
    _sum: SuggestionSumAggregateOutputType | null
    _min: SuggestionMinAggregateOutputType | null
    _max: SuggestionMaxAggregateOutputType | null
  }

  type GetSuggestionGroupByPayload<T extends SuggestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuggestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuggestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuggestionGroupByOutputType[P]>
            : GetScalarType<T[P], SuggestionGroupByOutputType[P]>
        }
      >
    >


  export type SuggestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewId?: boolean
    filePath?: boolean
    lineNumber?: boolean
    category?: boolean
    severity?: boolean
    message?: boolean
    explanation?: boolean
    feedback?: boolean
    createdAt?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suggestion"]>

  export type SuggestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewId?: boolean
    filePath?: boolean
    lineNumber?: boolean
    category?: boolean
    severity?: boolean
    message?: boolean
    explanation?: boolean
    feedback?: boolean
    createdAt?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suggestion"]>

  export type SuggestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewId?: boolean
    filePath?: boolean
    lineNumber?: boolean
    category?: boolean
    severity?: boolean
    message?: boolean
    explanation?: boolean
    feedback?: boolean
    createdAt?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suggestion"]>

  export type SuggestionSelectScalar = {
    id?: boolean
    reviewId?: boolean
    filePath?: boolean
    lineNumber?: boolean
    category?: boolean
    severity?: boolean
    message?: boolean
    explanation?: boolean
    feedback?: boolean
    createdAt?: boolean
  }

  export type SuggestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reviewId" | "filePath" | "lineNumber" | "category" | "severity" | "message" | "explanation" | "feedback" | "createdAt", ExtArgs["result"]["suggestion"]>
  export type SuggestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }
  export type SuggestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }
  export type SuggestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }

  export type $SuggestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Suggestion"
    objects: {
      review: Prisma.$ReviewPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      reviewId: number
      filePath: string | null
      lineNumber: number | null
      category: string
      severity: $Enums.Severity
      message: string
      explanation: string | null
      feedback: $Enums.Feedback | null
      createdAt: Date
    }, ExtArgs["result"]["suggestion"]>
    composites: {}
  }

  type SuggestionGetPayload<S extends boolean | null | undefined | SuggestionDefaultArgs> = $Result.GetResult<Prisma.$SuggestionPayload, S>

  type SuggestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SuggestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SuggestionCountAggregateInputType | true
    }

  export interface SuggestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Suggestion'], meta: { name: 'Suggestion' } }
    /**
     * Find zero or one Suggestion that matches the filter.
     * @param {SuggestionFindUniqueArgs} args - Arguments to find a Suggestion
     * @example
     * // Get one Suggestion
     * const suggestion = await prisma.suggestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuggestionFindUniqueArgs>(args: SelectSubset<T, SuggestionFindUniqueArgs<ExtArgs>>): Prisma__SuggestionClient<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Suggestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SuggestionFindUniqueOrThrowArgs} args - Arguments to find a Suggestion
     * @example
     * // Get one Suggestion
     * const suggestion = await prisma.suggestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuggestionFindUniqueOrThrowArgs>(args: SelectSubset<T, SuggestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SuggestionClient<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Suggestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionFindFirstArgs} args - Arguments to find a Suggestion
     * @example
     * // Get one Suggestion
     * const suggestion = await prisma.suggestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuggestionFindFirstArgs>(args?: SelectSubset<T, SuggestionFindFirstArgs<ExtArgs>>): Prisma__SuggestionClient<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Suggestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionFindFirstOrThrowArgs} args - Arguments to find a Suggestion
     * @example
     * // Get one Suggestion
     * const suggestion = await prisma.suggestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuggestionFindFirstOrThrowArgs>(args?: SelectSubset<T, SuggestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SuggestionClient<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suggestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suggestions
     * const suggestions = await prisma.suggestion.findMany()
     * 
     * // Get first 10 Suggestions
     * const suggestions = await prisma.suggestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const suggestionWithIdOnly = await prisma.suggestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SuggestionFindManyArgs>(args?: SelectSubset<T, SuggestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Suggestion.
     * @param {SuggestionCreateArgs} args - Arguments to create a Suggestion.
     * @example
     * // Create one Suggestion
     * const Suggestion = await prisma.suggestion.create({
     *   data: {
     *     // ... data to create a Suggestion
     *   }
     * })
     * 
     */
    create<T extends SuggestionCreateArgs>(args: SelectSubset<T, SuggestionCreateArgs<ExtArgs>>): Prisma__SuggestionClient<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Suggestions.
     * @param {SuggestionCreateManyArgs} args - Arguments to create many Suggestions.
     * @example
     * // Create many Suggestions
     * const suggestion = await prisma.suggestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SuggestionCreateManyArgs>(args?: SelectSubset<T, SuggestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suggestions and returns the data saved in the database.
     * @param {SuggestionCreateManyAndReturnArgs} args - Arguments to create many Suggestions.
     * @example
     * // Create many Suggestions
     * const suggestion = await prisma.suggestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suggestions and only return the `id`
     * const suggestionWithIdOnly = await prisma.suggestion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SuggestionCreateManyAndReturnArgs>(args?: SelectSubset<T, SuggestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Suggestion.
     * @param {SuggestionDeleteArgs} args - Arguments to delete one Suggestion.
     * @example
     * // Delete one Suggestion
     * const Suggestion = await prisma.suggestion.delete({
     *   where: {
     *     // ... filter to delete one Suggestion
     *   }
     * })
     * 
     */
    delete<T extends SuggestionDeleteArgs>(args: SelectSubset<T, SuggestionDeleteArgs<ExtArgs>>): Prisma__SuggestionClient<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Suggestion.
     * @param {SuggestionUpdateArgs} args - Arguments to update one Suggestion.
     * @example
     * // Update one Suggestion
     * const suggestion = await prisma.suggestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SuggestionUpdateArgs>(args: SelectSubset<T, SuggestionUpdateArgs<ExtArgs>>): Prisma__SuggestionClient<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Suggestions.
     * @param {SuggestionDeleteManyArgs} args - Arguments to filter Suggestions to delete.
     * @example
     * // Delete a few Suggestions
     * const { count } = await prisma.suggestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SuggestionDeleteManyArgs>(args?: SelectSubset<T, SuggestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suggestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suggestions
     * const suggestion = await prisma.suggestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SuggestionUpdateManyArgs>(args: SelectSubset<T, SuggestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suggestions and returns the data updated in the database.
     * @param {SuggestionUpdateManyAndReturnArgs} args - Arguments to update many Suggestions.
     * @example
     * // Update many Suggestions
     * const suggestion = await prisma.suggestion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Suggestions and only return the `id`
     * const suggestionWithIdOnly = await prisma.suggestion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SuggestionUpdateManyAndReturnArgs>(args: SelectSubset<T, SuggestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Suggestion.
     * @param {SuggestionUpsertArgs} args - Arguments to update or create a Suggestion.
     * @example
     * // Update or create a Suggestion
     * const suggestion = await prisma.suggestion.upsert({
     *   create: {
     *     // ... data to create a Suggestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Suggestion we want to update
     *   }
     * })
     */
    upsert<T extends SuggestionUpsertArgs>(args: SelectSubset<T, SuggestionUpsertArgs<ExtArgs>>): Prisma__SuggestionClient<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Suggestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionCountArgs} args - Arguments to filter Suggestions to count.
     * @example
     * // Count the number of Suggestions
     * const count = await prisma.suggestion.count({
     *   where: {
     *     // ... the filter for the Suggestions we want to count
     *   }
     * })
    **/
    count<T extends SuggestionCountArgs>(
      args?: Subset<T, SuggestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuggestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Suggestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SuggestionAggregateArgs>(args: Subset<T, SuggestionAggregateArgs>): Prisma.PrismaPromise<GetSuggestionAggregateType<T>>

    /**
     * Group by Suggestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionGroupByArgs} args - Group by arguments.
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
      T extends SuggestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SuggestionGroupByArgs['orderBy'] }
        : { orderBy?: SuggestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SuggestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuggestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Suggestion model
   */
  readonly fields: SuggestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Suggestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SuggestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    review<T extends ReviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReviewDefaultArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Suggestion model
   */
  interface SuggestionFieldRefs {
    readonly id: FieldRef<"Suggestion", 'Int'>
    readonly reviewId: FieldRef<"Suggestion", 'Int'>
    readonly filePath: FieldRef<"Suggestion", 'String'>
    readonly lineNumber: FieldRef<"Suggestion", 'Int'>
    readonly category: FieldRef<"Suggestion", 'String'>
    readonly severity: FieldRef<"Suggestion", 'Severity'>
    readonly message: FieldRef<"Suggestion", 'String'>
    readonly explanation: FieldRef<"Suggestion", 'String'>
    readonly feedback: FieldRef<"Suggestion", 'Feedback'>
    readonly createdAt: FieldRef<"Suggestion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Suggestion findUnique
   */
  export type SuggestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suggestion
     */
    omit?: SuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * Filter, which Suggestion to fetch.
     */
    where: SuggestionWhereUniqueInput
  }

  /**
   * Suggestion findUniqueOrThrow
   */
  export type SuggestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suggestion
     */
    omit?: SuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * Filter, which Suggestion to fetch.
     */
    where: SuggestionWhereUniqueInput
  }

  /**
   * Suggestion findFirst
   */
  export type SuggestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suggestion
     */
    omit?: SuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * Filter, which Suggestion to fetch.
     */
    where?: SuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suggestions to fetch.
     */
    orderBy?: SuggestionOrderByWithRelationInput | SuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suggestions.
     */
    cursor?: SuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suggestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suggestions.
     */
    distinct?: SuggestionScalarFieldEnum | SuggestionScalarFieldEnum[]
  }

  /**
   * Suggestion findFirstOrThrow
   */
  export type SuggestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suggestion
     */
    omit?: SuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * Filter, which Suggestion to fetch.
     */
    where?: SuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suggestions to fetch.
     */
    orderBy?: SuggestionOrderByWithRelationInput | SuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suggestions.
     */
    cursor?: SuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suggestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suggestions.
     */
    distinct?: SuggestionScalarFieldEnum | SuggestionScalarFieldEnum[]
  }

  /**
   * Suggestion findMany
   */
  export type SuggestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suggestion
     */
    omit?: SuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * Filter, which Suggestions to fetch.
     */
    where?: SuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suggestions to fetch.
     */
    orderBy?: SuggestionOrderByWithRelationInput | SuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suggestions.
     */
    cursor?: SuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suggestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suggestions.
     */
    distinct?: SuggestionScalarFieldEnum | SuggestionScalarFieldEnum[]
  }

  /**
   * Suggestion create
   */
  export type SuggestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suggestion
     */
    omit?: SuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Suggestion.
     */
    data: XOR<SuggestionCreateInput, SuggestionUncheckedCreateInput>
  }

  /**
   * Suggestion createMany
   */
  export type SuggestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suggestions.
     */
    data: SuggestionCreateManyInput | SuggestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Suggestion createManyAndReturn
   */
  export type SuggestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Suggestion
     */
    omit?: SuggestionOmit<ExtArgs> | null
    /**
     * The data used to create many Suggestions.
     */
    data: SuggestionCreateManyInput | SuggestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Suggestion update
   */
  export type SuggestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suggestion
     */
    omit?: SuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Suggestion.
     */
    data: XOR<SuggestionUpdateInput, SuggestionUncheckedUpdateInput>
    /**
     * Choose, which Suggestion to update.
     */
    where: SuggestionWhereUniqueInput
  }

  /**
   * Suggestion updateMany
   */
  export type SuggestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Suggestions.
     */
    data: XOR<SuggestionUpdateManyMutationInput, SuggestionUncheckedUpdateManyInput>
    /**
     * Filter which Suggestions to update
     */
    where?: SuggestionWhereInput
    /**
     * Limit how many Suggestions to update.
     */
    limit?: number
  }

  /**
   * Suggestion updateManyAndReturn
   */
  export type SuggestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Suggestion
     */
    omit?: SuggestionOmit<ExtArgs> | null
    /**
     * The data used to update Suggestions.
     */
    data: XOR<SuggestionUpdateManyMutationInput, SuggestionUncheckedUpdateManyInput>
    /**
     * Filter which Suggestions to update
     */
    where?: SuggestionWhereInput
    /**
     * Limit how many Suggestions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Suggestion upsert
   */
  export type SuggestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suggestion
     */
    omit?: SuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Suggestion to update in case it exists.
     */
    where: SuggestionWhereUniqueInput
    /**
     * In case the Suggestion found by the `where` argument doesn't exist, create a new Suggestion with this data.
     */
    create: XOR<SuggestionCreateInput, SuggestionUncheckedCreateInput>
    /**
     * In case the Suggestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SuggestionUpdateInput, SuggestionUncheckedUpdateInput>
  }

  /**
   * Suggestion delete
   */
  export type SuggestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suggestion
     */
    omit?: SuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * Filter which Suggestion to delete.
     */
    where: SuggestionWhereUniqueInput
  }

  /**
   * Suggestion deleteMany
   */
  export type SuggestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suggestions to delete
     */
    where?: SuggestionWhereInput
    /**
     * Limit how many Suggestions to delete.
     */
    limit?: number
  }

  /**
   * Suggestion without action
   */
  export type SuggestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suggestion
     */
    omit?: SuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
  }


  /**
   * Model WebhookEvent
   */

  export type AggregateWebhookEvent = {
    _count: WebhookEventCountAggregateOutputType | null
    _min: WebhookEventMinAggregateOutputType | null
    _max: WebhookEventMaxAggregateOutputType | null
  }

  export type WebhookEventMinAggregateOutputType = {
    id: string | null
    event: string | null
    processed: boolean | null
    createdAt: Date | null
  }

  export type WebhookEventMaxAggregateOutputType = {
    id: string | null
    event: string | null
    processed: boolean | null
    createdAt: Date | null
  }

  export type WebhookEventCountAggregateOutputType = {
    id: number
    event: number
    processed: number
    createdAt: number
    _all: number
  }


  export type WebhookEventMinAggregateInputType = {
    id?: true
    event?: true
    processed?: true
    createdAt?: true
  }

  export type WebhookEventMaxAggregateInputType = {
    id?: true
    event?: true
    processed?: true
    createdAt?: true
  }

  export type WebhookEventCountAggregateInputType = {
    id?: true
    event?: true
    processed?: true
    createdAt?: true
    _all?: true
  }

  export type WebhookEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookEvent to aggregate.
     */
    where?: WebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookEvents to fetch.
     */
    orderBy?: WebhookEventOrderByWithRelationInput | WebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WebhookEvents
    **/
    _count?: true | WebhookEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebhookEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebhookEventMaxAggregateInputType
  }

  export type GetWebhookEventAggregateType<T extends WebhookEventAggregateArgs> = {
        [P in keyof T & keyof AggregateWebhookEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebhookEvent[P]>
      : GetScalarType<T[P], AggregateWebhookEvent[P]>
  }




  export type WebhookEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebhookEventWhereInput
    orderBy?: WebhookEventOrderByWithAggregationInput | WebhookEventOrderByWithAggregationInput[]
    by: WebhookEventScalarFieldEnum[] | WebhookEventScalarFieldEnum
    having?: WebhookEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebhookEventCountAggregateInputType | true
    _min?: WebhookEventMinAggregateInputType
    _max?: WebhookEventMaxAggregateInputType
  }

  export type WebhookEventGroupByOutputType = {
    id: string
    event: string
    processed: boolean
    createdAt: Date
    _count: WebhookEventCountAggregateOutputType | null
    _min: WebhookEventMinAggregateOutputType | null
    _max: WebhookEventMaxAggregateOutputType | null
  }

  type GetWebhookEventGroupByPayload<T extends WebhookEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebhookEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebhookEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebhookEventGroupByOutputType[P]>
            : GetScalarType<T[P], WebhookEventGroupByOutputType[P]>
        }
      >
    >


  export type WebhookEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event?: boolean
    processed?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["webhookEvent"]>

  export type WebhookEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event?: boolean
    processed?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["webhookEvent"]>

  export type WebhookEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event?: boolean
    processed?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["webhookEvent"]>

  export type WebhookEventSelectScalar = {
    id?: boolean
    event?: boolean
    processed?: boolean
    createdAt?: boolean
  }

  export type WebhookEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "event" | "processed" | "createdAt", ExtArgs["result"]["webhookEvent"]>

  export type $WebhookEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WebhookEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      event: string
      processed: boolean
      createdAt: Date
    }, ExtArgs["result"]["webhookEvent"]>
    composites: {}
  }

  type WebhookEventGetPayload<S extends boolean | null | undefined | WebhookEventDefaultArgs> = $Result.GetResult<Prisma.$WebhookEventPayload, S>

  type WebhookEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WebhookEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebhookEventCountAggregateInputType | true
    }

  export interface WebhookEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WebhookEvent'], meta: { name: 'WebhookEvent' } }
    /**
     * Find zero or one WebhookEvent that matches the filter.
     * @param {WebhookEventFindUniqueArgs} args - Arguments to find a WebhookEvent
     * @example
     * // Get one WebhookEvent
     * const webhookEvent = await prisma.webhookEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebhookEventFindUniqueArgs>(args: SelectSubset<T, WebhookEventFindUniqueArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WebhookEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WebhookEventFindUniqueOrThrowArgs} args - Arguments to find a WebhookEvent
     * @example
     * // Get one WebhookEvent
     * const webhookEvent = await prisma.webhookEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebhookEventFindUniqueOrThrowArgs>(args: SelectSubset<T, WebhookEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebhookEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventFindFirstArgs} args - Arguments to find a WebhookEvent
     * @example
     * // Get one WebhookEvent
     * const webhookEvent = await prisma.webhookEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebhookEventFindFirstArgs>(args?: SelectSubset<T, WebhookEventFindFirstArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebhookEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventFindFirstOrThrowArgs} args - Arguments to find a WebhookEvent
     * @example
     * // Get one WebhookEvent
     * const webhookEvent = await prisma.webhookEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebhookEventFindFirstOrThrowArgs>(args?: SelectSubset<T, WebhookEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WebhookEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WebhookEvents
     * const webhookEvents = await prisma.webhookEvent.findMany()
     * 
     * // Get first 10 WebhookEvents
     * const webhookEvents = await prisma.webhookEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webhookEventWithIdOnly = await prisma.webhookEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebhookEventFindManyArgs>(args?: SelectSubset<T, WebhookEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WebhookEvent.
     * @param {WebhookEventCreateArgs} args - Arguments to create a WebhookEvent.
     * @example
     * // Create one WebhookEvent
     * const WebhookEvent = await prisma.webhookEvent.create({
     *   data: {
     *     // ... data to create a WebhookEvent
     *   }
     * })
     * 
     */
    create<T extends WebhookEventCreateArgs>(args: SelectSubset<T, WebhookEventCreateArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WebhookEvents.
     * @param {WebhookEventCreateManyArgs} args - Arguments to create many WebhookEvents.
     * @example
     * // Create many WebhookEvents
     * const webhookEvent = await prisma.webhookEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebhookEventCreateManyArgs>(args?: SelectSubset<T, WebhookEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WebhookEvents and returns the data saved in the database.
     * @param {WebhookEventCreateManyAndReturnArgs} args - Arguments to create many WebhookEvents.
     * @example
     * // Create many WebhookEvents
     * const webhookEvent = await prisma.webhookEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WebhookEvents and only return the `id`
     * const webhookEventWithIdOnly = await prisma.webhookEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebhookEventCreateManyAndReturnArgs>(args?: SelectSubset<T, WebhookEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WebhookEvent.
     * @param {WebhookEventDeleteArgs} args - Arguments to delete one WebhookEvent.
     * @example
     * // Delete one WebhookEvent
     * const WebhookEvent = await prisma.webhookEvent.delete({
     *   where: {
     *     // ... filter to delete one WebhookEvent
     *   }
     * })
     * 
     */
    delete<T extends WebhookEventDeleteArgs>(args: SelectSubset<T, WebhookEventDeleteArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WebhookEvent.
     * @param {WebhookEventUpdateArgs} args - Arguments to update one WebhookEvent.
     * @example
     * // Update one WebhookEvent
     * const webhookEvent = await prisma.webhookEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebhookEventUpdateArgs>(args: SelectSubset<T, WebhookEventUpdateArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WebhookEvents.
     * @param {WebhookEventDeleteManyArgs} args - Arguments to filter WebhookEvents to delete.
     * @example
     * // Delete a few WebhookEvents
     * const { count } = await prisma.webhookEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebhookEventDeleteManyArgs>(args?: SelectSubset<T, WebhookEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebhookEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WebhookEvents
     * const webhookEvent = await prisma.webhookEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebhookEventUpdateManyArgs>(args: SelectSubset<T, WebhookEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebhookEvents and returns the data updated in the database.
     * @param {WebhookEventUpdateManyAndReturnArgs} args - Arguments to update many WebhookEvents.
     * @example
     * // Update many WebhookEvents
     * const webhookEvent = await prisma.webhookEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WebhookEvents and only return the `id`
     * const webhookEventWithIdOnly = await prisma.webhookEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WebhookEventUpdateManyAndReturnArgs>(args: SelectSubset<T, WebhookEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WebhookEvent.
     * @param {WebhookEventUpsertArgs} args - Arguments to update or create a WebhookEvent.
     * @example
     * // Update or create a WebhookEvent
     * const webhookEvent = await prisma.webhookEvent.upsert({
     *   create: {
     *     // ... data to create a WebhookEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WebhookEvent we want to update
     *   }
     * })
     */
    upsert<T extends WebhookEventUpsertArgs>(args: SelectSubset<T, WebhookEventUpsertArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WebhookEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventCountArgs} args - Arguments to filter WebhookEvents to count.
     * @example
     * // Count the number of WebhookEvents
     * const count = await prisma.webhookEvent.count({
     *   where: {
     *     // ... the filter for the WebhookEvents we want to count
     *   }
     * })
    **/
    count<T extends WebhookEventCountArgs>(
      args?: Subset<T, WebhookEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebhookEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WebhookEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WebhookEventAggregateArgs>(args: Subset<T, WebhookEventAggregateArgs>): Prisma.PrismaPromise<GetWebhookEventAggregateType<T>>

    /**
     * Group by WebhookEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventGroupByArgs} args - Group by arguments.
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
      T extends WebhookEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebhookEventGroupByArgs['orderBy'] }
        : { orderBy?: WebhookEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WebhookEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebhookEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WebhookEvent model
   */
  readonly fields: WebhookEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WebhookEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebhookEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the WebhookEvent model
   */
  interface WebhookEventFieldRefs {
    readonly id: FieldRef<"WebhookEvent", 'String'>
    readonly event: FieldRef<"WebhookEvent", 'String'>
    readonly processed: FieldRef<"WebhookEvent", 'Boolean'>
    readonly createdAt: FieldRef<"WebhookEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WebhookEvent findUnique
   */
  export type WebhookEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * Filter, which WebhookEvent to fetch.
     */
    where: WebhookEventWhereUniqueInput
  }

  /**
   * WebhookEvent findUniqueOrThrow
   */
  export type WebhookEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * Filter, which WebhookEvent to fetch.
     */
    where: WebhookEventWhereUniqueInput
  }

  /**
   * WebhookEvent findFirst
   */
  export type WebhookEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * Filter, which WebhookEvent to fetch.
     */
    where?: WebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookEvents to fetch.
     */
    orderBy?: WebhookEventOrderByWithRelationInput | WebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookEvents.
     */
    cursor?: WebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookEvents.
     */
    distinct?: WebhookEventScalarFieldEnum | WebhookEventScalarFieldEnum[]
  }

  /**
   * WebhookEvent findFirstOrThrow
   */
  export type WebhookEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * Filter, which WebhookEvent to fetch.
     */
    where?: WebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookEvents to fetch.
     */
    orderBy?: WebhookEventOrderByWithRelationInput | WebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookEvents.
     */
    cursor?: WebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookEvents.
     */
    distinct?: WebhookEventScalarFieldEnum | WebhookEventScalarFieldEnum[]
  }

  /**
   * WebhookEvent findMany
   */
  export type WebhookEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * Filter, which WebhookEvents to fetch.
     */
    where?: WebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookEvents to fetch.
     */
    orderBy?: WebhookEventOrderByWithRelationInput | WebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WebhookEvents.
     */
    cursor?: WebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookEvents.
     */
    distinct?: WebhookEventScalarFieldEnum | WebhookEventScalarFieldEnum[]
  }

  /**
   * WebhookEvent create
   */
  export type WebhookEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * The data needed to create a WebhookEvent.
     */
    data: XOR<WebhookEventCreateInput, WebhookEventUncheckedCreateInput>
  }

  /**
   * WebhookEvent createMany
   */
  export type WebhookEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WebhookEvents.
     */
    data: WebhookEventCreateManyInput | WebhookEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebhookEvent createManyAndReturn
   */
  export type WebhookEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * The data used to create many WebhookEvents.
     */
    data: WebhookEventCreateManyInput | WebhookEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebhookEvent update
   */
  export type WebhookEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * The data needed to update a WebhookEvent.
     */
    data: XOR<WebhookEventUpdateInput, WebhookEventUncheckedUpdateInput>
    /**
     * Choose, which WebhookEvent to update.
     */
    where: WebhookEventWhereUniqueInput
  }

  /**
   * WebhookEvent updateMany
   */
  export type WebhookEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WebhookEvents.
     */
    data: XOR<WebhookEventUpdateManyMutationInput, WebhookEventUncheckedUpdateManyInput>
    /**
     * Filter which WebhookEvents to update
     */
    where?: WebhookEventWhereInput
    /**
     * Limit how many WebhookEvents to update.
     */
    limit?: number
  }

  /**
   * WebhookEvent updateManyAndReturn
   */
  export type WebhookEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * The data used to update WebhookEvents.
     */
    data: XOR<WebhookEventUpdateManyMutationInput, WebhookEventUncheckedUpdateManyInput>
    /**
     * Filter which WebhookEvents to update
     */
    where?: WebhookEventWhereInput
    /**
     * Limit how many WebhookEvents to update.
     */
    limit?: number
  }

  /**
   * WebhookEvent upsert
   */
  export type WebhookEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * The filter to search for the WebhookEvent to update in case it exists.
     */
    where: WebhookEventWhereUniqueInput
    /**
     * In case the WebhookEvent found by the `where` argument doesn't exist, create a new WebhookEvent with this data.
     */
    create: XOR<WebhookEventCreateInput, WebhookEventUncheckedCreateInput>
    /**
     * In case the WebhookEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebhookEventUpdateInput, WebhookEventUncheckedUpdateInput>
  }

  /**
   * WebhookEvent delete
   */
  export type WebhookEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * Filter which WebhookEvent to delete.
     */
    where: WebhookEventWhereUniqueInput
  }

  /**
   * WebhookEvent deleteMany
   */
  export type WebhookEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookEvents to delete
     */
    where?: WebhookEventWhereInput
    /**
     * Limit how many WebhookEvents to delete.
     */
    limit?: number
  }

  /**
   * WebhookEvent without action
   */
  export type WebhookEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
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


  export const RepositoryScalarFieldEnum: {
    id: 'id',
    githubRepoId: 'githubRepoId',
    fullName: 'fullName',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type RepositoryScalarFieldEnum = (typeof RepositoryScalarFieldEnum)[keyof typeof RepositoryScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    repoId: 'repoId',
    prNumber: 'prNumber',
    prTitle: 'prTitle',
    prAuthor: 'prAuthor',
    githubDelivery: 'githubDelivery',
    status: 'status',
    errorMessage: 'errorMessage',
    createdAt: 'createdAt',
    completedAt: 'completedAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SuggestionScalarFieldEnum: {
    id: 'id',
    reviewId: 'reviewId',
    filePath: 'filePath',
    lineNumber: 'lineNumber',
    category: 'category',
    severity: 'severity',
    message: 'message',
    explanation: 'explanation',
    feedback: 'feedback',
    createdAt: 'createdAt'
  };

  export type SuggestionScalarFieldEnum = (typeof SuggestionScalarFieldEnum)[keyof typeof SuggestionScalarFieldEnum]


  export const WebhookEventScalarFieldEnum: {
    id: 'id',
    event: 'event',
    processed: 'processed',
    createdAt: 'createdAt'
  };

  export type WebhookEventScalarFieldEnum = (typeof WebhookEventScalarFieldEnum)[keyof typeof WebhookEventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ReviewStatus'
   */
  export type EnumReviewStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReviewStatus'>
    


  /**
   * Reference to a field of type 'ReviewStatus[]'
   */
  export type ListEnumReviewStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReviewStatus[]'>
    


  /**
   * Reference to a field of type 'Severity'
   */
  export type EnumSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Severity'>
    


  /**
   * Reference to a field of type 'Severity[]'
   */
  export type ListEnumSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Severity[]'>
    


  /**
   * Reference to a field of type 'Feedback'
   */
  export type EnumFeedbackFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Feedback'>
    


  /**
   * Reference to a field of type 'Feedback[]'
   */
  export type ListEnumFeedbackFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Feedback[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type RepositoryWhereInput = {
    AND?: RepositoryWhereInput | RepositoryWhereInput[]
    OR?: RepositoryWhereInput[]
    NOT?: RepositoryWhereInput | RepositoryWhereInput[]
    id?: IntFilter<"Repository"> | number
    githubRepoId?: BigIntFilter<"Repository"> | bigint | number
    fullName?: StringFilter<"Repository"> | string
    isActive?: BoolFilter<"Repository"> | boolean
    createdAt?: DateTimeFilter<"Repository"> | Date | string
    reviews?: ReviewListRelationFilter
  }

  export type RepositoryOrderByWithRelationInput = {
    id?: SortOrder
    githubRepoId?: SortOrder
    fullName?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type RepositoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    githubRepoId?: bigint | number
    AND?: RepositoryWhereInput | RepositoryWhereInput[]
    OR?: RepositoryWhereInput[]
    NOT?: RepositoryWhereInput | RepositoryWhereInput[]
    fullName?: StringFilter<"Repository"> | string
    isActive?: BoolFilter<"Repository"> | boolean
    createdAt?: DateTimeFilter<"Repository"> | Date | string
    reviews?: ReviewListRelationFilter
  }, "id" | "githubRepoId">

  export type RepositoryOrderByWithAggregationInput = {
    id?: SortOrder
    githubRepoId?: SortOrder
    fullName?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: RepositoryCountOrderByAggregateInput
    _avg?: RepositoryAvgOrderByAggregateInput
    _max?: RepositoryMaxOrderByAggregateInput
    _min?: RepositoryMinOrderByAggregateInput
    _sum?: RepositorySumOrderByAggregateInput
  }

  export type RepositoryScalarWhereWithAggregatesInput = {
    AND?: RepositoryScalarWhereWithAggregatesInput | RepositoryScalarWhereWithAggregatesInput[]
    OR?: RepositoryScalarWhereWithAggregatesInput[]
    NOT?: RepositoryScalarWhereWithAggregatesInput | RepositoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Repository"> | number
    githubRepoId?: BigIntWithAggregatesFilter<"Repository"> | bigint | number
    fullName?: StringWithAggregatesFilter<"Repository"> | string
    isActive?: BoolWithAggregatesFilter<"Repository"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Repository"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    repoId?: IntFilter<"Review"> | number
    prNumber?: IntFilter<"Review"> | number
    prTitle?: StringNullableFilter<"Review"> | string | null
    prAuthor?: StringNullableFilter<"Review"> | string | null
    githubDelivery?: StringNullableFilter<"Review"> | string | null
    status?: EnumReviewStatusFilter<"Review"> | $Enums.ReviewStatus
    errorMessage?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    completedAt?: DateTimeNullableFilter<"Review"> | Date | string | null
    repo?: XOR<RepositoryScalarRelationFilter, RepositoryWhereInput>
    suggestions?: SuggestionListRelationFilter
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    repoId?: SortOrder
    prNumber?: SortOrder
    prTitle?: SortOrderInput | SortOrder
    prAuthor?: SortOrderInput | SortOrder
    githubDelivery?: SortOrderInput | SortOrder
    status?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    repo?: RepositoryOrderByWithRelationInput
    suggestions?: SuggestionOrderByRelationAggregateInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    githubDelivery?: string
    repoId_prNumber_githubDelivery?: ReviewRepoIdPrNumberGithubDeliveryCompoundUniqueInput
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    repoId?: IntFilter<"Review"> | number
    prNumber?: IntFilter<"Review"> | number
    prTitle?: StringNullableFilter<"Review"> | string | null
    prAuthor?: StringNullableFilter<"Review"> | string | null
    status?: EnumReviewStatusFilter<"Review"> | $Enums.ReviewStatus
    errorMessage?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    completedAt?: DateTimeNullableFilter<"Review"> | Date | string | null
    repo?: XOR<RepositoryScalarRelationFilter, RepositoryWhereInput>
    suggestions?: SuggestionListRelationFilter
  }, "id" | "githubDelivery" | "repoId_prNumber_githubDelivery">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    repoId?: SortOrder
    prNumber?: SortOrder
    prTitle?: SortOrderInput | SortOrder
    prAuthor?: SortOrderInput | SortOrder
    githubDelivery?: SortOrderInput | SortOrder
    status?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    repoId?: IntWithAggregatesFilter<"Review"> | number
    prNumber?: IntWithAggregatesFilter<"Review"> | number
    prTitle?: StringNullableWithAggregatesFilter<"Review"> | string | null
    prAuthor?: StringNullableWithAggregatesFilter<"Review"> | string | null
    githubDelivery?: StringNullableWithAggregatesFilter<"Review"> | string | null
    status?: EnumReviewStatusWithAggregatesFilter<"Review"> | $Enums.ReviewStatus
    errorMessage?: StringNullableWithAggregatesFilter<"Review"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"Review"> | Date | string | null
  }

  export type SuggestionWhereInput = {
    AND?: SuggestionWhereInput | SuggestionWhereInput[]
    OR?: SuggestionWhereInput[]
    NOT?: SuggestionWhereInput | SuggestionWhereInput[]
    id?: IntFilter<"Suggestion"> | number
    reviewId?: IntFilter<"Suggestion"> | number
    filePath?: StringNullableFilter<"Suggestion"> | string | null
    lineNumber?: IntNullableFilter<"Suggestion"> | number | null
    category?: StringFilter<"Suggestion"> | string
    severity?: EnumSeverityFilter<"Suggestion"> | $Enums.Severity
    message?: StringFilter<"Suggestion"> | string
    explanation?: StringNullableFilter<"Suggestion"> | string | null
    feedback?: EnumFeedbackNullableFilter<"Suggestion"> | $Enums.Feedback | null
    createdAt?: DateTimeFilter<"Suggestion"> | Date | string
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
  }

  export type SuggestionOrderByWithRelationInput = {
    id?: SortOrder
    reviewId?: SortOrder
    filePath?: SortOrderInput | SortOrder
    lineNumber?: SortOrderInput | SortOrder
    category?: SortOrder
    severity?: SortOrder
    message?: SortOrder
    explanation?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    review?: ReviewOrderByWithRelationInput
  }

  export type SuggestionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SuggestionWhereInput | SuggestionWhereInput[]
    OR?: SuggestionWhereInput[]
    NOT?: SuggestionWhereInput | SuggestionWhereInput[]
    reviewId?: IntFilter<"Suggestion"> | number
    filePath?: StringNullableFilter<"Suggestion"> | string | null
    lineNumber?: IntNullableFilter<"Suggestion"> | number | null
    category?: StringFilter<"Suggestion"> | string
    severity?: EnumSeverityFilter<"Suggestion"> | $Enums.Severity
    message?: StringFilter<"Suggestion"> | string
    explanation?: StringNullableFilter<"Suggestion"> | string | null
    feedback?: EnumFeedbackNullableFilter<"Suggestion"> | $Enums.Feedback | null
    createdAt?: DateTimeFilter<"Suggestion"> | Date | string
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
  }, "id">

  export type SuggestionOrderByWithAggregationInput = {
    id?: SortOrder
    reviewId?: SortOrder
    filePath?: SortOrderInput | SortOrder
    lineNumber?: SortOrderInput | SortOrder
    category?: SortOrder
    severity?: SortOrder
    message?: SortOrder
    explanation?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SuggestionCountOrderByAggregateInput
    _avg?: SuggestionAvgOrderByAggregateInput
    _max?: SuggestionMaxOrderByAggregateInput
    _min?: SuggestionMinOrderByAggregateInput
    _sum?: SuggestionSumOrderByAggregateInput
  }

  export type SuggestionScalarWhereWithAggregatesInput = {
    AND?: SuggestionScalarWhereWithAggregatesInput | SuggestionScalarWhereWithAggregatesInput[]
    OR?: SuggestionScalarWhereWithAggregatesInput[]
    NOT?: SuggestionScalarWhereWithAggregatesInput | SuggestionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Suggestion"> | number
    reviewId?: IntWithAggregatesFilter<"Suggestion"> | number
    filePath?: StringNullableWithAggregatesFilter<"Suggestion"> | string | null
    lineNumber?: IntNullableWithAggregatesFilter<"Suggestion"> | number | null
    category?: StringWithAggregatesFilter<"Suggestion"> | string
    severity?: EnumSeverityWithAggregatesFilter<"Suggestion"> | $Enums.Severity
    message?: StringWithAggregatesFilter<"Suggestion"> | string
    explanation?: StringNullableWithAggregatesFilter<"Suggestion"> | string | null
    feedback?: EnumFeedbackNullableWithAggregatesFilter<"Suggestion"> | $Enums.Feedback | null
    createdAt?: DateTimeWithAggregatesFilter<"Suggestion"> | Date | string
  }

  export type WebhookEventWhereInput = {
    AND?: WebhookEventWhereInput | WebhookEventWhereInput[]
    OR?: WebhookEventWhereInput[]
    NOT?: WebhookEventWhereInput | WebhookEventWhereInput[]
    id?: StringFilter<"WebhookEvent"> | string
    event?: StringFilter<"WebhookEvent"> | string
    processed?: BoolFilter<"WebhookEvent"> | boolean
    createdAt?: DateTimeFilter<"WebhookEvent"> | Date | string
  }

  export type WebhookEventOrderByWithRelationInput = {
    id?: SortOrder
    event?: SortOrder
    processed?: SortOrder
    createdAt?: SortOrder
  }

  export type WebhookEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WebhookEventWhereInput | WebhookEventWhereInput[]
    OR?: WebhookEventWhereInput[]
    NOT?: WebhookEventWhereInput | WebhookEventWhereInput[]
    event?: StringFilter<"WebhookEvent"> | string
    processed?: BoolFilter<"WebhookEvent"> | boolean
    createdAt?: DateTimeFilter<"WebhookEvent"> | Date | string
  }, "id">

  export type WebhookEventOrderByWithAggregationInput = {
    id?: SortOrder
    event?: SortOrder
    processed?: SortOrder
    createdAt?: SortOrder
    _count?: WebhookEventCountOrderByAggregateInput
    _max?: WebhookEventMaxOrderByAggregateInput
    _min?: WebhookEventMinOrderByAggregateInput
  }

  export type WebhookEventScalarWhereWithAggregatesInput = {
    AND?: WebhookEventScalarWhereWithAggregatesInput | WebhookEventScalarWhereWithAggregatesInput[]
    OR?: WebhookEventScalarWhereWithAggregatesInput[]
    NOT?: WebhookEventScalarWhereWithAggregatesInput | WebhookEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WebhookEvent"> | string
    event?: StringWithAggregatesFilter<"WebhookEvent"> | string
    processed?: BoolWithAggregatesFilter<"WebhookEvent"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"WebhookEvent"> | Date | string
  }

  export type RepositoryCreateInput = {
    githubRepoId: bigint | number
    fullName: string
    isActive?: boolean
    createdAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutRepoInput
  }

  export type RepositoryUncheckedCreateInput = {
    id?: number
    githubRepoId: bigint | number
    fullName: string
    isActive?: boolean
    createdAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutRepoInput
  }

  export type RepositoryUpdateInput = {
    githubRepoId?: BigIntFieldUpdateOperationsInput | bigint | number
    fullName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutRepoNestedInput
  }

  export type RepositoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    githubRepoId?: BigIntFieldUpdateOperationsInput | bigint | number
    fullName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutRepoNestedInput
  }

  export type RepositoryCreateManyInput = {
    id?: number
    githubRepoId: bigint | number
    fullName: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type RepositoryUpdateManyMutationInput = {
    githubRepoId?: BigIntFieldUpdateOperationsInput | bigint | number
    fullName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepositoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    githubRepoId?: BigIntFieldUpdateOperationsInput | bigint | number
    fullName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    prNumber: number
    prTitle?: string | null
    prAuthor?: string | null
    githubDelivery?: string | null
    status?: $Enums.ReviewStatus
    errorMessage?: string | null
    createdAt?: Date | string
    completedAt?: Date | string | null
    repo: RepositoryCreateNestedOneWithoutReviewsInput
    suggestions?: SuggestionCreateNestedManyWithoutReviewInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    repoId: number
    prNumber: number
    prTitle?: string | null
    prAuthor?: string | null
    githubDelivery?: string | null
    status?: $Enums.ReviewStatus
    errorMessage?: string | null
    createdAt?: Date | string
    completedAt?: Date | string | null
    suggestions?: SuggestionUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewUpdateInput = {
    prNumber?: IntFieldUpdateOperationsInput | number
    prTitle?: NullableStringFieldUpdateOperationsInput | string | null
    prAuthor?: NullableStringFieldUpdateOperationsInput | string | null
    githubDelivery?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    repo?: RepositoryUpdateOneRequiredWithoutReviewsNestedInput
    suggestions?: SuggestionUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    repoId?: IntFieldUpdateOperationsInput | number
    prNumber?: IntFieldUpdateOperationsInput | number
    prTitle?: NullableStringFieldUpdateOperationsInput | string | null
    prAuthor?: NullableStringFieldUpdateOperationsInput | string | null
    githubDelivery?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suggestions?: SuggestionUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type ReviewCreateManyInput = {
    id?: number
    repoId: number
    prNumber: number
    prTitle?: string | null
    prAuthor?: string | null
    githubDelivery?: string | null
    status?: $Enums.ReviewStatus
    errorMessage?: string | null
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type ReviewUpdateManyMutationInput = {
    prNumber?: IntFieldUpdateOperationsInput | number
    prTitle?: NullableStringFieldUpdateOperationsInput | string | null
    prAuthor?: NullableStringFieldUpdateOperationsInput | string | null
    githubDelivery?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    repoId?: IntFieldUpdateOperationsInput | number
    prNumber?: IntFieldUpdateOperationsInput | number
    prTitle?: NullableStringFieldUpdateOperationsInput | string | null
    prAuthor?: NullableStringFieldUpdateOperationsInput | string | null
    githubDelivery?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SuggestionCreateInput = {
    filePath?: string | null
    lineNumber?: number | null
    category: string
    severity: $Enums.Severity
    message: string
    explanation?: string | null
    feedback?: $Enums.Feedback | null
    createdAt?: Date | string
    review: ReviewCreateNestedOneWithoutSuggestionsInput
  }

  export type SuggestionUncheckedCreateInput = {
    id?: number
    reviewId: number
    filePath?: string | null
    lineNumber?: number | null
    category: string
    severity: $Enums.Severity
    message: string
    explanation?: string | null
    feedback?: $Enums.Feedback | null
    createdAt?: Date | string
  }

  export type SuggestionUpdateInput = {
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    message?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableEnumFeedbackFieldUpdateOperationsInput | $Enums.Feedback | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUpdateOneRequiredWithoutSuggestionsNestedInput
  }

  export type SuggestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewId?: IntFieldUpdateOperationsInput | number
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    message?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableEnumFeedbackFieldUpdateOperationsInput | $Enums.Feedback | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuggestionCreateManyInput = {
    id?: number
    reviewId: number
    filePath?: string | null
    lineNumber?: number | null
    category: string
    severity: $Enums.Severity
    message: string
    explanation?: string | null
    feedback?: $Enums.Feedback | null
    createdAt?: Date | string
  }

  export type SuggestionUpdateManyMutationInput = {
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    message?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableEnumFeedbackFieldUpdateOperationsInput | $Enums.Feedback | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuggestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewId?: IntFieldUpdateOperationsInput | number
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    message?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableEnumFeedbackFieldUpdateOperationsInput | $Enums.Feedback | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookEventCreateInput = {
    id: string
    event: string
    processed?: boolean
    createdAt?: Date | string
  }

  export type WebhookEventUncheckedCreateInput = {
    id: string
    event: string
    processed?: boolean
    createdAt?: Date | string
  }

  export type WebhookEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    processed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    processed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookEventCreateManyInput = {
    id: string
    event: string
    processed?: boolean
    createdAt?: Date | string
  }

  export type WebhookEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    processed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    processed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RepositoryCountOrderByAggregateInput = {
    id?: SortOrder
    githubRepoId?: SortOrder
    fullName?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type RepositoryAvgOrderByAggregateInput = {
    id?: SortOrder
    githubRepoId?: SortOrder
  }

  export type RepositoryMaxOrderByAggregateInput = {
    id?: SortOrder
    githubRepoId?: SortOrder
    fullName?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type RepositoryMinOrderByAggregateInput = {
    id?: SortOrder
    githubRepoId?: SortOrder
    fullName?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type RepositorySumOrderByAggregateInput = {
    id?: SortOrder
    githubRepoId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumReviewStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewStatusFilter<$PrismaModel> | $Enums.ReviewStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type RepositoryScalarRelationFilter = {
    is?: RepositoryWhereInput
    isNot?: RepositoryWhereInput
  }

  export type SuggestionListRelationFilter = {
    every?: SuggestionWhereInput
    some?: SuggestionWhereInput
    none?: SuggestionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SuggestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewRepoIdPrNumberGithubDeliveryCompoundUniqueInput = {
    repoId: number
    prNumber: number
    githubDelivery: string
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    repoId?: SortOrder
    prNumber?: SortOrder
    prTitle?: SortOrder
    prAuthor?: SortOrder
    githubDelivery?: SortOrder
    status?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    repoId?: SortOrder
    prNumber?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    repoId?: SortOrder
    prNumber?: SortOrder
    prTitle?: SortOrder
    prAuthor?: SortOrder
    githubDelivery?: SortOrder
    status?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    repoId?: SortOrder
    prNumber?: SortOrder
    prTitle?: SortOrder
    prAuthor?: SortOrder
    githubDelivery?: SortOrder
    status?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    repoId?: SortOrder
    prNumber?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumReviewStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReviewStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReviewStatusFilter<$PrismaModel>
    _max?: NestedEnumReviewStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityFilter<$PrismaModel> | $Enums.Severity
  }

  export type EnumFeedbackNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Feedback | EnumFeedbackFieldRefInput<$PrismaModel> | null
    in?: $Enums.Feedback[] | ListEnumFeedbackFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Feedback[] | ListEnumFeedbackFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFeedbackNullableFilter<$PrismaModel> | $Enums.Feedback | null
  }

  export type ReviewScalarRelationFilter = {
    is?: ReviewWhereInput
    isNot?: ReviewWhereInput
  }

  export type SuggestionCountOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    filePath?: SortOrder
    lineNumber?: SortOrder
    category?: SortOrder
    severity?: SortOrder
    message?: SortOrder
    explanation?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
  }

  export type SuggestionAvgOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    lineNumber?: SortOrder
  }

  export type SuggestionMaxOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    filePath?: SortOrder
    lineNumber?: SortOrder
    category?: SortOrder
    severity?: SortOrder
    message?: SortOrder
    explanation?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
  }

  export type SuggestionMinOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    filePath?: SortOrder
    lineNumber?: SortOrder
    category?: SortOrder
    severity?: SortOrder
    message?: SortOrder
    explanation?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
  }

  export type SuggestionSumOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    lineNumber?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityWithAggregatesFilter<$PrismaModel> | $Enums.Severity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeverityFilter<$PrismaModel>
    _max?: NestedEnumSeverityFilter<$PrismaModel>
  }

  export type EnumFeedbackNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Feedback | EnumFeedbackFieldRefInput<$PrismaModel> | null
    in?: $Enums.Feedback[] | ListEnumFeedbackFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Feedback[] | ListEnumFeedbackFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFeedbackNullableWithAggregatesFilter<$PrismaModel> | $Enums.Feedback | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumFeedbackNullableFilter<$PrismaModel>
    _max?: NestedEnumFeedbackNullableFilter<$PrismaModel>
  }

  export type WebhookEventCountOrderByAggregateInput = {
    id?: SortOrder
    event?: SortOrder
    processed?: SortOrder
    createdAt?: SortOrder
  }

  export type WebhookEventMaxOrderByAggregateInput = {
    id?: SortOrder
    event?: SortOrder
    processed?: SortOrder
    createdAt?: SortOrder
  }

  export type WebhookEventMinOrderByAggregateInput = {
    id?: SortOrder
    event?: SortOrder
    processed?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewCreateNestedManyWithoutRepoInput = {
    create?: XOR<ReviewCreateWithoutRepoInput, ReviewUncheckedCreateWithoutRepoInput> | ReviewCreateWithoutRepoInput[] | ReviewUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRepoInput | ReviewCreateOrConnectWithoutRepoInput[]
    createMany?: ReviewCreateManyRepoInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutRepoInput = {
    create?: XOR<ReviewCreateWithoutRepoInput, ReviewUncheckedCreateWithoutRepoInput> | ReviewCreateWithoutRepoInput[] | ReviewUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRepoInput | ReviewCreateOrConnectWithoutRepoInput[]
    createMany?: ReviewCreateManyRepoInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReviewUpdateManyWithoutRepoNestedInput = {
    create?: XOR<ReviewCreateWithoutRepoInput, ReviewUncheckedCreateWithoutRepoInput> | ReviewCreateWithoutRepoInput[] | ReviewUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRepoInput | ReviewCreateOrConnectWithoutRepoInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutRepoInput | ReviewUpsertWithWhereUniqueWithoutRepoInput[]
    createMany?: ReviewCreateManyRepoInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutRepoInput | ReviewUpdateWithWhereUniqueWithoutRepoInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutRepoInput | ReviewUpdateManyWithWhereWithoutRepoInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReviewUncheckedUpdateManyWithoutRepoNestedInput = {
    create?: XOR<ReviewCreateWithoutRepoInput, ReviewUncheckedCreateWithoutRepoInput> | ReviewCreateWithoutRepoInput[] | ReviewUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRepoInput | ReviewCreateOrConnectWithoutRepoInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutRepoInput | ReviewUpsertWithWhereUniqueWithoutRepoInput[]
    createMany?: ReviewCreateManyRepoInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutRepoInput | ReviewUpdateWithWhereUniqueWithoutRepoInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutRepoInput | ReviewUpdateManyWithWhereWithoutRepoInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type RepositoryCreateNestedOneWithoutReviewsInput = {
    create?: XOR<RepositoryCreateWithoutReviewsInput, RepositoryUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: RepositoryCreateOrConnectWithoutReviewsInput
    connect?: RepositoryWhereUniqueInput
  }

  export type SuggestionCreateNestedManyWithoutReviewInput = {
    create?: XOR<SuggestionCreateWithoutReviewInput, SuggestionUncheckedCreateWithoutReviewInput> | SuggestionCreateWithoutReviewInput[] | SuggestionUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: SuggestionCreateOrConnectWithoutReviewInput | SuggestionCreateOrConnectWithoutReviewInput[]
    createMany?: SuggestionCreateManyReviewInputEnvelope
    connect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
  }

  export type SuggestionUncheckedCreateNestedManyWithoutReviewInput = {
    create?: XOR<SuggestionCreateWithoutReviewInput, SuggestionUncheckedCreateWithoutReviewInput> | SuggestionCreateWithoutReviewInput[] | SuggestionUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: SuggestionCreateOrConnectWithoutReviewInput | SuggestionCreateOrConnectWithoutReviewInput[]
    createMany?: SuggestionCreateManyReviewInputEnvelope
    connect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumReviewStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReviewStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type RepositoryUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<RepositoryCreateWithoutReviewsInput, RepositoryUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: RepositoryCreateOrConnectWithoutReviewsInput
    upsert?: RepositoryUpsertWithoutReviewsInput
    connect?: RepositoryWhereUniqueInput
    update?: XOR<XOR<RepositoryUpdateToOneWithWhereWithoutReviewsInput, RepositoryUpdateWithoutReviewsInput>, RepositoryUncheckedUpdateWithoutReviewsInput>
  }

  export type SuggestionUpdateManyWithoutReviewNestedInput = {
    create?: XOR<SuggestionCreateWithoutReviewInput, SuggestionUncheckedCreateWithoutReviewInput> | SuggestionCreateWithoutReviewInput[] | SuggestionUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: SuggestionCreateOrConnectWithoutReviewInput | SuggestionCreateOrConnectWithoutReviewInput[]
    upsert?: SuggestionUpsertWithWhereUniqueWithoutReviewInput | SuggestionUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: SuggestionCreateManyReviewInputEnvelope
    set?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    disconnect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    delete?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    connect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    update?: SuggestionUpdateWithWhereUniqueWithoutReviewInput | SuggestionUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: SuggestionUpdateManyWithWhereWithoutReviewInput | SuggestionUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: SuggestionScalarWhereInput | SuggestionScalarWhereInput[]
  }

  export type SuggestionUncheckedUpdateManyWithoutReviewNestedInput = {
    create?: XOR<SuggestionCreateWithoutReviewInput, SuggestionUncheckedCreateWithoutReviewInput> | SuggestionCreateWithoutReviewInput[] | SuggestionUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: SuggestionCreateOrConnectWithoutReviewInput | SuggestionCreateOrConnectWithoutReviewInput[]
    upsert?: SuggestionUpsertWithWhereUniqueWithoutReviewInput | SuggestionUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: SuggestionCreateManyReviewInputEnvelope
    set?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    disconnect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    delete?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    connect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    update?: SuggestionUpdateWithWhereUniqueWithoutReviewInput | SuggestionUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: SuggestionUpdateManyWithWhereWithoutReviewInput | SuggestionUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: SuggestionScalarWhereInput | SuggestionScalarWhereInput[]
  }

  export type ReviewCreateNestedOneWithoutSuggestionsInput = {
    create?: XOR<ReviewCreateWithoutSuggestionsInput, ReviewUncheckedCreateWithoutSuggestionsInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutSuggestionsInput
    connect?: ReviewWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumSeverityFieldUpdateOperationsInput = {
    set?: $Enums.Severity
  }

  export type NullableEnumFeedbackFieldUpdateOperationsInput = {
    set?: $Enums.Feedback | null
  }

  export type ReviewUpdateOneRequiredWithoutSuggestionsNestedInput = {
    create?: XOR<ReviewCreateWithoutSuggestionsInput, ReviewUncheckedCreateWithoutSuggestionsInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutSuggestionsInput
    upsert?: ReviewUpsertWithoutSuggestionsInput
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutSuggestionsInput, ReviewUpdateWithoutSuggestionsInput>, ReviewUncheckedUpdateWithoutSuggestionsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumReviewStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewStatusFilter<$PrismaModel> | $Enums.ReviewStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumReviewStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReviewStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReviewStatusFilter<$PrismaModel>
    _max?: NestedEnumReviewStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityFilter<$PrismaModel> | $Enums.Severity
  }

  export type NestedEnumFeedbackNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Feedback | EnumFeedbackFieldRefInput<$PrismaModel> | null
    in?: $Enums.Feedback[] | ListEnumFeedbackFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Feedback[] | ListEnumFeedbackFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFeedbackNullableFilter<$PrismaModel> | $Enums.Feedback | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityWithAggregatesFilter<$PrismaModel> | $Enums.Severity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeverityFilter<$PrismaModel>
    _max?: NestedEnumSeverityFilter<$PrismaModel>
  }

  export type NestedEnumFeedbackNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Feedback | EnumFeedbackFieldRefInput<$PrismaModel> | null
    in?: $Enums.Feedback[] | ListEnumFeedbackFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Feedback[] | ListEnumFeedbackFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFeedbackNullableWithAggregatesFilter<$PrismaModel> | $Enums.Feedback | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumFeedbackNullableFilter<$PrismaModel>
    _max?: NestedEnumFeedbackNullableFilter<$PrismaModel>
  }

  export type ReviewCreateWithoutRepoInput = {
    prNumber: number
    prTitle?: string | null
    prAuthor?: string | null
    githubDelivery?: string | null
    status?: $Enums.ReviewStatus
    errorMessage?: string | null
    createdAt?: Date | string
    completedAt?: Date | string | null
    suggestions?: SuggestionCreateNestedManyWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutRepoInput = {
    id?: number
    prNumber: number
    prTitle?: string | null
    prAuthor?: string | null
    githubDelivery?: string | null
    status?: $Enums.ReviewStatus
    errorMessage?: string | null
    createdAt?: Date | string
    completedAt?: Date | string | null
    suggestions?: SuggestionUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewCreateOrConnectWithoutRepoInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutRepoInput, ReviewUncheckedCreateWithoutRepoInput>
  }

  export type ReviewCreateManyRepoInputEnvelope = {
    data: ReviewCreateManyRepoInput | ReviewCreateManyRepoInput[]
    skipDuplicates?: boolean
  }

  export type ReviewUpsertWithWhereUniqueWithoutRepoInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutRepoInput, ReviewUncheckedUpdateWithoutRepoInput>
    create: XOR<ReviewCreateWithoutRepoInput, ReviewUncheckedCreateWithoutRepoInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutRepoInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutRepoInput, ReviewUncheckedUpdateWithoutRepoInput>
  }

  export type ReviewUpdateManyWithWhereWithoutRepoInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutRepoInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    repoId?: IntFilter<"Review"> | number
    prNumber?: IntFilter<"Review"> | number
    prTitle?: StringNullableFilter<"Review"> | string | null
    prAuthor?: StringNullableFilter<"Review"> | string | null
    githubDelivery?: StringNullableFilter<"Review"> | string | null
    status?: EnumReviewStatusFilter<"Review"> | $Enums.ReviewStatus
    errorMessage?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    completedAt?: DateTimeNullableFilter<"Review"> | Date | string | null
  }

  export type RepositoryCreateWithoutReviewsInput = {
    githubRepoId: bigint | number
    fullName: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type RepositoryUncheckedCreateWithoutReviewsInput = {
    id?: number
    githubRepoId: bigint | number
    fullName: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type RepositoryCreateOrConnectWithoutReviewsInput = {
    where: RepositoryWhereUniqueInput
    create: XOR<RepositoryCreateWithoutReviewsInput, RepositoryUncheckedCreateWithoutReviewsInput>
  }

  export type SuggestionCreateWithoutReviewInput = {
    filePath?: string | null
    lineNumber?: number | null
    category: string
    severity: $Enums.Severity
    message: string
    explanation?: string | null
    feedback?: $Enums.Feedback | null
    createdAt?: Date | string
  }

  export type SuggestionUncheckedCreateWithoutReviewInput = {
    id?: number
    filePath?: string | null
    lineNumber?: number | null
    category: string
    severity: $Enums.Severity
    message: string
    explanation?: string | null
    feedback?: $Enums.Feedback | null
    createdAt?: Date | string
  }

  export type SuggestionCreateOrConnectWithoutReviewInput = {
    where: SuggestionWhereUniqueInput
    create: XOR<SuggestionCreateWithoutReviewInput, SuggestionUncheckedCreateWithoutReviewInput>
  }

  export type SuggestionCreateManyReviewInputEnvelope = {
    data: SuggestionCreateManyReviewInput | SuggestionCreateManyReviewInput[]
    skipDuplicates?: boolean
  }

  export type RepositoryUpsertWithoutReviewsInput = {
    update: XOR<RepositoryUpdateWithoutReviewsInput, RepositoryUncheckedUpdateWithoutReviewsInput>
    create: XOR<RepositoryCreateWithoutReviewsInput, RepositoryUncheckedCreateWithoutReviewsInput>
    where?: RepositoryWhereInput
  }

  export type RepositoryUpdateToOneWithWhereWithoutReviewsInput = {
    where?: RepositoryWhereInput
    data: XOR<RepositoryUpdateWithoutReviewsInput, RepositoryUncheckedUpdateWithoutReviewsInput>
  }

  export type RepositoryUpdateWithoutReviewsInput = {
    githubRepoId?: BigIntFieldUpdateOperationsInput | bigint | number
    fullName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepositoryUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    githubRepoId?: BigIntFieldUpdateOperationsInput | bigint | number
    fullName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuggestionUpsertWithWhereUniqueWithoutReviewInput = {
    where: SuggestionWhereUniqueInput
    update: XOR<SuggestionUpdateWithoutReviewInput, SuggestionUncheckedUpdateWithoutReviewInput>
    create: XOR<SuggestionCreateWithoutReviewInput, SuggestionUncheckedCreateWithoutReviewInput>
  }

  export type SuggestionUpdateWithWhereUniqueWithoutReviewInput = {
    where: SuggestionWhereUniqueInput
    data: XOR<SuggestionUpdateWithoutReviewInput, SuggestionUncheckedUpdateWithoutReviewInput>
  }

  export type SuggestionUpdateManyWithWhereWithoutReviewInput = {
    where: SuggestionScalarWhereInput
    data: XOR<SuggestionUpdateManyMutationInput, SuggestionUncheckedUpdateManyWithoutReviewInput>
  }

  export type SuggestionScalarWhereInput = {
    AND?: SuggestionScalarWhereInput | SuggestionScalarWhereInput[]
    OR?: SuggestionScalarWhereInput[]
    NOT?: SuggestionScalarWhereInput | SuggestionScalarWhereInput[]
    id?: IntFilter<"Suggestion"> | number
    reviewId?: IntFilter<"Suggestion"> | number
    filePath?: StringNullableFilter<"Suggestion"> | string | null
    lineNumber?: IntNullableFilter<"Suggestion"> | number | null
    category?: StringFilter<"Suggestion"> | string
    severity?: EnumSeverityFilter<"Suggestion"> | $Enums.Severity
    message?: StringFilter<"Suggestion"> | string
    explanation?: StringNullableFilter<"Suggestion"> | string | null
    feedback?: EnumFeedbackNullableFilter<"Suggestion"> | $Enums.Feedback | null
    createdAt?: DateTimeFilter<"Suggestion"> | Date | string
  }

  export type ReviewCreateWithoutSuggestionsInput = {
    prNumber: number
    prTitle?: string | null
    prAuthor?: string | null
    githubDelivery?: string | null
    status?: $Enums.ReviewStatus
    errorMessage?: string | null
    createdAt?: Date | string
    completedAt?: Date | string | null
    repo: RepositoryCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutSuggestionsInput = {
    id?: number
    repoId: number
    prNumber: number
    prTitle?: string | null
    prAuthor?: string | null
    githubDelivery?: string | null
    status?: $Enums.ReviewStatus
    errorMessage?: string | null
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type ReviewCreateOrConnectWithoutSuggestionsInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutSuggestionsInput, ReviewUncheckedCreateWithoutSuggestionsInput>
  }

  export type ReviewUpsertWithoutSuggestionsInput = {
    update: XOR<ReviewUpdateWithoutSuggestionsInput, ReviewUncheckedUpdateWithoutSuggestionsInput>
    create: XOR<ReviewCreateWithoutSuggestionsInput, ReviewUncheckedCreateWithoutSuggestionsInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutSuggestionsInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutSuggestionsInput, ReviewUncheckedUpdateWithoutSuggestionsInput>
  }

  export type ReviewUpdateWithoutSuggestionsInput = {
    prNumber?: IntFieldUpdateOperationsInput | number
    prTitle?: NullableStringFieldUpdateOperationsInput | string | null
    prAuthor?: NullableStringFieldUpdateOperationsInput | string | null
    githubDelivery?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    repo?: RepositoryUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutSuggestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    repoId?: IntFieldUpdateOperationsInput | number
    prNumber?: IntFieldUpdateOperationsInput | number
    prTitle?: NullableStringFieldUpdateOperationsInput | string | null
    prAuthor?: NullableStringFieldUpdateOperationsInput | string | null
    githubDelivery?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewCreateManyRepoInput = {
    id?: number
    prNumber: number
    prTitle?: string | null
    prAuthor?: string | null
    githubDelivery?: string | null
    status?: $Enums.ReviewStatus
    errorMessage?: string | null
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type ReviewUpdateWithoutRepoInput = {
    prNumber?: IntFieldUpdateOperationsInput | number
    prTitle?: NullableStringFieldUpdateOperationsInput | string | null
    prAuthor?: NullableStringFieldUpdateOperationsInput | string | null
    githubDelivery?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suggestions?: SuggestionUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutRepoInput = {
    id?: IntFieldUpdateOperationsInput | number
    prNumber?: IntFieldUpdateOperationsInput | number
    prTitle?: NullableStringFieldUpdateOperationsInput | string | null
    prAuthor?: NullableStringFieldUpdateOperationsInput | string | null
    githubDelivery?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suggestions?: SuggestionUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateManyWithoutRepoInput = {
    id?: IntFieldUpdateOperationsInput | number
    prNumber?: IntFieldUpdateOperationsInput | number
    prTitle?: NullableStringFieldUpdateOperationsInput | string | null
    prAuthor?: NullableStringFieldUpdateOperationsInput | string | null
    githubDelivery?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SuggestionCreateManyReviewInput = {
    id?: number
    filePath?: string | null
    lineNumber?: number | null
    category: string
    severity: $Enums.Severity
    message: string
    explanation?: string | null
    feedback?: $Enums.Feedback | null
    createdAt?: Date | string
  }

  export type SuggestionUpdateWithoutReviewInput = {
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    message?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableEnumFeedbackFieldUpdateOperationsInput | $Enums.Feedback | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuggestionUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    message?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableEnumFeedbackFieldUpdateOperationsInput | $Enums.Feedback | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuggestionUncheckedUpdateManyWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    message?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableEnumFeedbackFieldUpdateOperationsInput | $Enums.Feedback | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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