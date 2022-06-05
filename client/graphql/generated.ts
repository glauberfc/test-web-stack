import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  date: any
  timestamptz: any
  uuid: any
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>
  _gt?: InputMaybe<Scalars['String']>
  _gte?: InputMaybe<Scalars['String']>
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>
  _in?: InputMaybe<Array<Scalars['String']>>
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>
  _is_null?: InputMaybe<Scalars['Boolean']>
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>
  _lt?: InputMaybe<Scalars['String']>
  _lte?: InputMaybe<Scalars['String']>
  _neq?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>
  _nin?: InputMaybe<Array<Scalars['String']>>
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>
  _gt?: InputMaybe<Scalars['date']>
  _gte?: InputMaybe<Scalars['date']>
  _in?: InputMaybe<Array<Scalars['date']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['date']>
  _lte?: InputMaybe<Scalars['date']>
  _neq?: InputMaybe<Scalars['date']>
  _nin?: InputMaybe<Array<Scalars['date']>>
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root'
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>
}

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>
  on_conflict?: InputMaybe<Users_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input
  on_conflict?: InputMaybe<Users_On_Conflict>
}

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>
  where: Users_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>
  pk_columns: Users_Pk_Columns_Input
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

export type Query_Root = {
  __typename?: 'query_root'
  /** fetch data from the table: "users" */
  users: Array<Users>
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>
}

export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Users_Order_By>>
  where?: InputMaybe<Users_Bool_Exp>
}

export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Users_Order_By>>
  where?: InputMaybe<Users_Bool_Exp>
}

export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_Root = {
  __typename?: 'subscription_root'
  /** fetch data from the table: "users" */
  users: Array<Users>
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>
}

export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Users_Order_By>>
  where?: InputMaybe<Users_Bool_Exp>
}

export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Users_Order_By>>
  where?: InputMaybe<Users_Bool_Exp>
}

export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid']
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>
  _gt?: InputMaybe<Scalars['timestamptz']>
  _gte?: InputMaybe<Scalars['timestamptz']>
  _in?: InputMaybe<Array<Scalars['timestamptz']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['timestamptz']>
  _lte?: InputMaybe<Scalars['timestamptz']>
  _neq?: InputMaybe<Scalars['timestamptz']>
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>
}

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users'
  address: Scalars['String']
  createdAt: Scalars['timestamptz']
  description: Scalars['String']
  /** Date of birth */
  dob: Scalars['date']
  id: Scalars['uuid']
  name: Scalars['String']
  updatedAt: Scalars['timestamptz']
}

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate'
  aggregate?: Maybe<Users_Aggregate_Fields>
  nodes: Array<Users>
}

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Users_Max_Fields>
  min?: Maybe<Users_Min_Fields>
}

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>
  _not?: InputMaybe<Users_Bool_Exp>
  _or?: InputMaybe<Array<Users_Bool_Exp>>
  address?: InputMaybe<String_Comparison_Exp>
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>
  description?: InputMaybe<String_Comparison_Exp>
  dob?: InputMaybe<Date_Comparison_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  name?: InputMaybe<String_Comparison_Exp>
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UserPkey = 'user_pkey',
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  address?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['timestamptz']>
  description?: InputMaybe<Scalars['String']>
  /** Date of birth */
  dob?: InputMaybe<Scalars['date']>
  id?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields'
  address?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['timestamptz']>
  description?: Maybe<Scalars['String']>
  /** Date of birth */
  dob?: Maybe<Scalars['date']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields'
  address?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['timestamptz']>
  description?: Maybe<Scalars['String']>
  /** Date of birth */
  dob?: Maybe<Scalars['date']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Users>
}

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint
  update_columns?: Array<Users_Update_Column>
  where?: InputMaybe<Users_Bool_Exp>
}

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  address?: InputMaybe<Order_By>
  createdAt?: InputMaybe<Order_By>
  description?: InputMaybe<Order_By>
  dob?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  updatedAt?: InputMaybe<Order_By>
}

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Dob = 'dob',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  address?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['timestamptz']>
  description?: InputMaybe<Scalars['String']>
  /** Date of birth */
  dob?: InputMaybe<Scalars['date']>
  id?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Dob = 'dob',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>
  _gt?: InputMaybe<Scalars['uuid']>
  _gte?: InputMaybe<Scalars['uuid']>
  _in?: InputMaybe<Array<Scalars['uuid']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['uuid']>
  _lte?: InputMaybe<Scalars['uuid']>
  _neq?: InputMaybe<Scalars['uuid']>
  _nin?: InputMaybe<Array<Scalars['uuid']>>
}

export type UsersQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  name?: InputMaybe<String_Comparison_Exp>
}>

export type UsersQuery = {
  __typename?: 'query_root'
  users: Array<{
    __typename?: 'users'
    id: any
    name: string
    description: string
  }>
  users_aggregate: {
    __typename?: 'users_aggregate'
    aggregate?: { __typename?: 'users_aggregate_fields'; count: number } | null
  }
}

export const UsersDocument = gql`
  query Users($limit: Int, $offset: Int, $name: String_comparison_exp = {}) {
    users(limit: $limit, offset: $offset, where: { name: $name }) {
      id
      name
      description
    }
    users_aggregate(where: { name: $name }) {
      aggregate {
        count
      }
    }
  }
`

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    options,
  )
}
export function useUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    options,
  )
}
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>
export type UsersQueryResult = Apollo.QueryResult<
  UsersQuery,
  UsersQueryVariables
>
