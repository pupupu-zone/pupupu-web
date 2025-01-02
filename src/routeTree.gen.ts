/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './core/routes/__root'
import { Route as IdRouteImport } from './core/routes/_id/route'
import { Route as AuthGuardRouteImport } from './core/routes/_auth-guard/route'
import { Route as IndexImport } from './core/routes/index'
import { Route as IdLoginImport } from './core/routes/_id/login'
import { Route as AuthGuardLibraryRouteImport } from './core/routes/_auth-guard/library/route'
import { Route as AuthGuardEntitiesRouteImport } from './core/routes/_auth-guard/entities/route'
import { Route as AuthGuardEntitiesSubscriptionsRouteImport } from './core/routes/_auth-guard/entities/subscriptions/route'
import { Route as AuthGuardEntitiesPaymentsRouteImport } from './core/routes/_auth-guard/entities/payments/route'
import { Route as AuthGuardEntitiesCategoriesRouteImport } from './core/routes/_auth-guard/entities/categories/route'
import { Route as AuthGuardEntitiesAppsRouteImport } from './core/routes/_auth-guard/entities/apps/route'
import { Route as AuthGuardEntitiesSubscriptionsSubscriptionIdImport } from './core/routes/_auth-guard/entities/subscriptions/$subscriptionId'
import { Route as AuthGuardEntitiesPaymentsPaymentIdImport } from './core/routes/_auth-guard/entities/payments/$paymentId'
import { Route as AuthGuardEntitiesCategoriesCategoryIdImport } from './core/routes/_auth-guard/entities/categories/$categoryId'
import { Route as AuthGuardEntitiesAppsAppIdImport } from './core/routes/_auth-guard/entities/apps/$appId'

// Create Virtual Routes

const AuthGuardSubscriptionsLazyImport = createFileRoute(
  '/_auth-guard/subscriptions',
)()
const AuthGuardProfileLazyImport = createFileRoute('/_auth-guard/profile')()
const AuthGuardLogoutLazyImport = createFileRoute('/_auth-guard/logout')()
const AuthGuardLibraryPaymentsLazyImport = createFileRoute(
  '/_auth-guard/library/payments',
)()
const AuthGuardLibraryCategoriesLazyImport = createFileRoute(
  '/_auth-guard/library/categories',
)()
const AuthGuardLibraryApplicationsLazyImport = createFileRoute(
  '/_auth-guard/library/applications',
)()
const AuthGuardEntitiesSubscriptionsAddLazyImport = createFileRoute(
  '/_auth-guard/entities/subscriptions/add',
)()
const AuthGuardEntitiesPaymentsAddLazyImport = createFileRoute(
  '/_auth-guard/entities/payments/add',
)()
const AuthGuardEntitiesCategoriesAddLazyImport = createFileRoute(
  '/_auth-guard/entities/categories/add',
)()
const AuthGuardEntitiesAppsAddLazyImport = createFileRoute(
  '/_auth-guard/entities/apps/add',
)()

// Create/Update Routes

const IdRouteRoute = IdRouteImport.update({
  id: '/_id',
  getParentRoute: () => rootRoute,
} as any)

const AuthGuardRouteRoute = AuthGuardRouteImport.update({
  id: '/_auth-guard',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AuthGuardSubscriptionsLazyRoute = AuthGuardSubscriptionsLazyImport.update(
  {
    id: '/subscriptions',
    path: '/subscriptions',
    getParentRoute: () => AuthGuardRouteRoute,
  } as any,
).lazy(() =>
  import('./core/routes/_auth-guard/subscriptions.lazy').then((d) => d.Route),
)

const AuthGuardProfileLazyRoute = AuthGuardProfileLazyImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => AuthGuardRouteRoute,
} as any).lazy(() =>
  import('./core/routes/_auth-guard/profile.lazy').then((d) => d.Route),
)

const AuthGuardLogoutLazyRoute = AuthGuardLogoutLazyImport.update({
  id: '/logout',
  path: '/logout',
  getParentRoute: () => AuthGuardRouteRoute,
} as any).lazy(() =>
  import('./core/routes/_auth-guard/logout.lazy').then((d) => d.Route),
)

const IdLoginRoute = IdLoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => IdRouteRoute,
} as any)

const AuthGuardLibraryRouteRoute = AuthGuardLibraryRouteImport.update({
  id: '/library',
  path: '/library',
  getParentRoute: () => AuthGuardRouteRoute,
} as any)

const AuthGuardEntitiesRouteRoute = AuthGuardEntitiesRouteImport.update({
  id: '/entities',
  path: '/entities',
  getParentRoute: () => AuthGuardRouteRoute,
} as any)

const AuthGuardLibraryPaymentsLazyRoute =
  AuthGuardLibraryPaymentsLazyImport.update({
    id: '/payments',
    path: '/payments',
    getParentRoute: () => AuthGuardLibraryRouteRoute,
  } as any).lazy(() =>
    import('./core/routes/_auth-guard/library/payments.lazy').then(
      (d) => d.Route,
    ),
  )

const AuthGuardLibraryCategoriesLazyRoute =
  AuthGuardLibraryCategoriesLazyImport.update({
    id: '/categories',
    path: '/categories',
    getParentRoute: () => AuthGuardLibraryRouteRoute,
  } as any).lazy(() =>
    import('./core/routes/_auth-guard/library/categories.lazy').then(
      (d) => d.Route,
    ),
  )

const AuthGuardLibraryApplicationsLazyRoute =
  AuthGuardLibraryApplicationsLazyImport.update({
    id: '/applications',
    path: '/applications',
    getParentRoute: () => AuthGuardLibraryRouteRoute,
  } as any).lazy(() =>
    import('./core/routes/_auth-guard/library/applications.lazy').then(
      (d) => d.Route,
    ),
  )

const AuthGuardEntitiesSubscriptionsRouteRoute =
  AuthGuardEntitiesSubscriptionsRouteImport.update({
    id: '/subscriptions',
    path: '/subscriptions',
    getParentRoute: () => AuthGuardEntitiesRouteRoute,
  } as any)

const AuthGuardEntitiesPaymentsRouteRoute =
  AuthGuardEntitiesPaymentsRouteImport.update({
    id: '/payments',
    path: '/payments',
    getParentRoute: () => AuthGuardEntitiesRouteRoute,
  } as any)

const AuthGuardEntitiesCategoriesRouteRoute =
  AuthGuardEntitiesCategoriesRouteImport.update({
    id: '/categories',
    path: '/categories',
    getParentRoute: () => AuthGuardEntitiesRouteRoute,
  } as any)

const AuthGuardEntitiesAppsRouteRoute = AuthGuardEntitiesAppsRouteImport.update(
  {
    id: '/apps',
    path: '/apps',
    getParentRoute: () => AuthGuardEntitiesRouteRoute,
  } as any,
)

const AuthGuardEntitiesSubscriptionsAddLazyRoute =
  AuthGuardEntitiesSubscriptionsAddLazyImport.update({
    id: '/add',
    path: '/add',
    getParentRoute: () => AuthGuardEntitiesSubscriptionsRouteRoute,
  } as any).lazy(() =>
    import('./core/routes/_auth-guard/entities/subscriptions/add.lazy').then(
      (d) => d.Route,
    ),
  )

const AuthGuardEntitiesPaymentsAddLazyRoute =
  AuthGuardEntitiesPaymentsAddLazyImport.update({
    id: '/add',
    path: '/add',
    getParentRoute: () => AuthGuardEntitiesPaymentsRouteRoute,
  } as any).lazy(() =>
    import('./core/routes/_auth-guard/entities/payments/add.lazy').then(
      (d) => d.Route,
    ),
  )

const AuthGuardEntitiesCategoriesAddLazyRoute =
  AuthGuardEntitiesCategoriesAddLazyImport.update({
    id: '/add',
    path: '/add',
    getParentRoute: () => AuthGuardEntitiesCategoriesRouteRoute,
  } as any).lazy(() =>
    import('./core/routes/_auth-guard/entities/categories/add.lazy').then(
      (d) => d.Route,
    ),
  )

const AuthGuardEntitiesAppsAddLazyRoute =
  AuthGuardEntitiesAppsAddLazyImport.update({
    id: '/add',
    path: '/add',
    getParentRoute: () => AuthGuardEntitiesAppsRouteRoute,
  } as any).lazy(() =>
    import('./core/routes/_auth-guard/entities/apps/add.lazy').then(
      (d) => d.Route,
    ),
  )

const AuthGuardEntitiesSubscriptionsSubscriptionIdRoute =
  AuthGuardEntitiesSubscriptionsSubscriptionIdImport.update({
    id: '/$subscriptionId',
    path: '/$subscriptionId',
    getParentRoute: () => AuthGuardEntitiesSubscriptionsRouteRoute,
  } as any)

const AuthGuardEntitiesPaymentsPaymentIdRoute =
  AuthGuardEntitiesPaymentsPaymentIdImport.update({
    id: '/$paymentId',
    path: '/$paymentId',
    getParentRoute: () => AuthGuardEntitiesPaymentsRouteRoute,
  } as any)

const AuthGuardEntitiesCategoriesCategoryIdRoute =
  AuthGuardEntitiesCategoriesCategoryIdImport.update({
    id: '/$categoryId',
    path: '/$categoryId',
    getParentRoute: () => AuthGuardEntitiesCategoriesRouteRoute,
  } as any)

const AuthGuardEntitiesAppsAppIdRoute = AuthGuardEntitiesAppsAppIdImport.update(
  {
    id: '/$appId',
    path: '/$appId',
    getParentRoute: () => AuthGuardEntitiesAppsRouteRoute,
  } as any,
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_auth-guard': {
      id: '/_auth-guard'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthGuardRouteImport
      parentRoute: typeof rootRoute
    }
    '/_id': {
      id: '/_id'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof IdRouteImport
      parentRoute: typeof rootRoute
    }
    '/_auth-guard/entities': {
      id: '/_auth-guard/entities'
      path: '/entities'
      fullPath: '/entities'
      preLoaderRoute: typeof AuthGuardEntitiesRouteImport
      parentRoute: typeof AuthGuardRouteImport
    }
    '/_auth-guard/library': {
      id: '/_auth-guard/library'
      path: '/library'
      fullPath: '/library'
      preLoaderRoute: typeof AuthGuardLibraryRouteImport
      parentRoute: typeof AuthGuardRouteImport
    }
    '/_id/login': {
      id: '/_id/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof IdLoginImport
      parentRoute: typeof IdRouteImport
    }
    '/_auth-guard/logout': {
      id: '/_auth-guard/logout'
      path: '/logout'
      fullPath: '/logout'
      preLoaderRoute: typeof AuthGuardLogoutLazyImport
      parentRoute: typeof AuthGuardRouteImport
    }
    '/_auth-guard/profile': {
      id: '/_auth-guard/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof AuthGuardProfileLazyImport
      parentRoute: typeof AuthGuardRouteImport
    }
    '/_auth-guard/subscriptions': {
      id: '/_auth-guard/subscriptions'
      path: '/subscriptions'
      fullPath: '/subscriptions'
      preLoaderRoute: typeof AuthGuardSubscriptionsLazyImport
      parentRoute: typeof AuthGuardRouteImport
    }
    '/_auth-guard/entities/apps': {
      id: '/_auth-guard/entities/apps'
      path: '/apps'
      fullPath: '/entities/apps'
      preLoaderRoute: typeof AuthGuardEntitiesAppsRouteImport
      parentRoute: typeof AuthGuardEntitiesRouteImport
    }
    '/_auth-guard/entities/categories': {
      id: '/_auth-guard/entities/categories'
      path: '/categories'
      fullPath: '/entities/categories'
      preLoaderRoute: typeof AuthGuardEntitiesCategoriesRouteImport
      parentRoute: typeof AuthGuardEntitiesRouteImport
    }
    '/_auth-guard/entities/payments': {
      id: '/_auth-guard/entities/payments'
      path: '/payments'
      fullPath: '/entities/payments'
      preLoaderRoute: typeof AuthGuardEntitiesPaymentsRouteImport
      parentRoute: typeof AuthGuardEntitiesRouteImport
    }
    '/_auth-guard/entities/subscriptions': {
      id: '/_auth-guard/entities/subscriptions'
      path: '/subscriptions'
      fullPath: '/entities/subscriptions'
      preLoaderRoute: typeof AuthGuardEntitiesSubscriptionsRouteImport
      parentRoute: typeof AuthGuardEntitiesRouteImport
    }
    '/_auth-guard/library/applications': {
      id: '/_auth-guard/library/applications'
      path: '/applications'
      fullPath: '/library/applications'
      preLoaderRoute: typeof AuthGuardLibraryApplicationsLazyImport
      parentRoute: typeof AuthGuardLibraryRouteImport
    }
    '/_auth-guard/library/categories': {
      id: '/_auth-guard/library/categories'
      path: '/categories'
      fullPath: '/library/categories'
      preLoaderRoute: typeof AuthGuardLibraryCategoriesLazyImport
      parentRoute: typeof AuthGuardLibraryRouteImport
    }
    '/_auth-guard/library/payments': {
      id: '/_auth-guard/library/payments'
      path: '/payments'
      fullPath: '/library/payments'
      preLoaderRoute: typeof AuthGuardLibraryPaymentsLazyImport
      parentRoute: typeof AuthGuardLibraryRouteImport
    }
    '/_auth-guard/entities/apps/$appId': {
      id: '/_auth-guard/entities/apps/$appId'
      path: '/$appId'
      fullPath: '/entities/apps/$appId'
      preLoaderRoute: typeof AuthGuardEntitiesAppsAppIdImport
      parentRoute: typeof AuthGuardEntitiesAppsRouteImport
    }
    '/_auth-guard/entities/categories/$categoryId': {
      id: '/_auth-guard/entities/categories/$categoryId'
      path: '/$categoryId'
      fullPath: '/entities/categories/$categoryId'
      preLoaderRoute: typeof AuthGuardEntitiesCategoriesCategoryIdImport
      parentRoute: typeof AuthGuardEntitiesCategoriesRouteImport
    }
    '/_auth-guard/entities/payments/$paymentId': {
      id: '/_auth-guard/entities/payments/$paymentId'
      path: '/$paymentId'
      fullPath: '/entities/payments/$paymentId'
      preLoaderRoute: typeof AuthGuardEntitiesPaymentsPaymentIdImport
      parentRoute: typeof AuthGuardEntitiesPaymentsRouteImport
    }
    '/_auth-guard/entities/subscriptions/$subscriptionId': {
      id: '/_auth-guard/entities/subscriptions/$subscriptionId'
      path: '/$subscriptionId'
      fullPath: '/entities/subscriptions/$subscriptionId'
      preLoaderRoute: typeof AuthGuardEntitiesSubscriptionsSubscriptionIdImport
      parentRoute: typeof AuthGuardEntitiesSubscriptionsRouteImport
    }
    '/_auth-guard/entities/apps/add': {
      id: '/_auth-guard/entities/apps/add'
      path: '/add'
      fullPath: '/entities/apps/add'
      preLoaderRoute: typeof AuthGuardEntitiesAppsAddLazyImport
      parentRoute: typeof AuthGuardEntitiesAppsRouteImport
    }
    '/_auth-guard/entities/categories/add': {
      id: '/_auth-guard/entities/categories/add'
      path: '/add'
      fullPath: '/entities/categories/add'
      preLoaderRoute: typeof AuthGuardEntitiesCategoriesAddLazyImport
      parentRoute: typeof AuthGuardEntitiesCategoriesRouteImport
    }
    '/_auth-guard/entities/payments/add': {
      id: '/_auth-guard/entities/payments/add'
      path: '/add'
      fullPath: '/entities/payments/add'
      preLoaderRoute: typeof AuthGuardEntitiesPaymentsAddLazyImport
      parentRoute: typeof AuthGuardEntitiesPaymentsRouteImport
    }
    '/_auth-guard/entities/subscriptions/add': {
      id: '/_auth-guard/entities/subscriptions/add'
      path: '/add'
      fullPath: '/entities/subscriptions/add'
      preLoaderRoute: typeof AuthGuardEntitiesSubscriptionsAddLazyImport
      parentRoute: typeof AuthGuardEntitiesSubscriptionsRouteImport
    }
  }
}

// Create and export the route tree

interface AuthGuardEntitiesAppsRouteRouteChildren {
  AuthGuardEntitiesAppsAppIdRoute: typeof AuthGuardEntitiesAppsAppIdRoute
  AuthGuardEntitiesAppsAddLazyRoute: typeof AuthGuardEntitiesAppsAddLazyRoute
}

const AuthGuardEntitiesAppsRouteRouteChildren: AuthGuardEntitiesAppsRouteRouteChildren =
  {
    AuthGuardEntitiesAppsAppIdRoute: AuthGuardEntitiesAppsAppIdRoute,
    AuthGuardEntitiesAppsAddLazyRoute: AuthGuardEntitiesAppsAddLazyRoute,
  }

const AuthGuardEntitiesAppsRouteRouteWithChildren =
  AuthGuardEntitiesAppsRouteRoute._addFileChildren(
    AuthGuardEntitiesAppsRouteRouteChildren,
  )

interface AuthGuardEntitiesCategoriesRouteRouteChildren {
  AuthGuardEntitiesCategoriesCategoryIdRoute: typeof AuthGuardEntitiesCategoriesCategoryIdRoute
  AuthGuardEntitiesCategoriesAddLazyRoute: typeof AuthGuardEntitiesCategoriesAddLazyRoute
}

const AuthGuardEntitiesCategoriesRouteRouteChildren: AuthGuardEntitiesCategoriesRouteRouteChildren =
  {
    AuthGuardEntitiesCategoriesCategoryIdRoute:
      AuthGuardEntitiesCategoriesCategoryIdRoute,
    AuthGuardEntitiesCategoriesAddLazyRoute:
      AuthGuardEntitiesCategoriesAddLazyRoute,
  }

const AuthGuardEntitiesCategoriesRouteRouteWithChildren =
  AuthGuardEntitiesCategoriesRouteRoute._addFileChildren(
    AuthGuardEntitiesCategoriesRouteRouteChildren,
  )

interface AuthGuardEntitiesPaymentsRouteRouteChildren {
  AuthGuardEntitiesPaymentsPaymentIdRoute: typeof AuthGuardEntitiesPaymentsPaymentIdRoute
  AuthGuardEntitiesPaymentsAddLazyRoute: typeof AuthGuardEntitiesPaymentsAddLazyRoute
}

const AuthGuardEntitiesPaymentsRouteRouteChildren: AuthGuardEntitiesPaymentsRouteRouteChildren =
  {
    AuthGuardEntitiesPaymentsPaymentIdRoute:
      AuthGuardEntitiesPaymentsPaymentIdRoute,
    AuthGuardEntitiesPaymentsAddLazyRoute:
      AuthGuardEntitiesPaymentsAddLazyRoute,
  }

const AuthGuardEntitiesPaymentsRouteRouteWithChildren =
  AuthGuardEntitiesPaymentsRouteRoute._addFileChildren(
    AuthGuardEntitiesPaymentsRouteRouteChildren,
  )

interface AuthGuardEntitiesSubscriptionsRouteRouteChildren {
  AuthGuardEntitiesSubscriptionsSubscriptionIdRoute: typeof AuthGuardEntitiesSubscriptionsSubscriptionIdRoute
  AuthGuardEntitiesSubscriptionsAddLazyRoute: typeof AuthGuardEntitiesSubscriptionsAddLazyRoute
}

const AuthGuardEntitiesSubscriptionsRouteRouteChildren: AuthGuardEntitiesSubscriptionsRouteRouteChildren =
  {
    AuthGuardEntitiesSubscriptionsSubscriptionIdRoute:
      AuthGuardEntitiesSubscriptionsSubscriptionIdRoute,
    AuthGuardEntitiesSubscriptionsAddLazyRoute:
      AuthGuardEntitiesSubscriptionsAddLazyRoute,
  }

const AuthGuardEntitiesSubscriptionsRouteRouteWithChildren =
  AuthGuardEntitiesSubscriptionsRouteRoute._addFileChildren(
    AuthGuardEntitiesSubscriptionsRouteRouteChildren,
  )

interface AuthGuardEntitiesRouteRouteChildren {
  AuthGuardEntitiesAppsRouteRoute: typeof AuthGuardEntitiesAppsRouteRouteWithChildren
  AuthGuardEntitiesCategoriesRouteRoute: typeof AuthGuardEntitiesCategoriesRouteRouteWithChildren
  AuthGuardEntitiesPaymentsRouteRoute: typeof AuthGuardEntitiesPaymentsRouteRouteWithChildren
  AuthGuardEntitiesSubscriptionsRouteRoute: typeof AuthGuardEntitiesSubscriptionsRouteRouteWithChildren
}

const AuthGuardEntitiesRouteRouteChildren: AuthGuardEntitiesRouteRouteChildren =
  {
    AuthGuardEntitiesAppsRouteRoute:
      AuthGuardEntitiesAppsRouteRouteWithChildren,
    AuthGuardEntitiesCategoriesRouteRoute:
      AuthGuardEntitiesCategoriesRouteRouteWithChildren,
    AuthGuardEntitiesPaymentsRouteRoute:
      AuthGuardEntitiesPaymentsRouteRouteWithChildren,
    AuthGuardEntitiesSubscriptionsRouteRoute:
      AuthGuardEntitiesSubscriptionsRouteRouteWithChildren,
  }

const AuthGuardEntitiesRouteRouteWithChildren =
  AuthGuardEntitiesRouteRoute._addFileChildren(
    AuthGuardEntitiesRouteRouteChildren,
  )

interface AuthGuardLibraryRouteRouteChildren {
  AuthGuardLibraryApplicationsLazyRoute: typeof AuthGuardLibraryApplicationsLazyRoute
  AuthGuardLibraryCategoriesLazyRoute: typeof AuthGuardLibraryCategoriesLazyRoute
  AuthGuardLibraryPaymentsLazyRoute: typeof AuthGuardLibraryPaymentsLazyRoute
}

const AuthGuardLibraryRouteRouteChildren: AuthGuardLibraryRouteRouteChildren = {
  AuthGuardLibraryApplicationsLazyRoute: AuthGuardLibraryApplicationsLazyRoute,
  AuthGuardLibraryCategoriesLazyRoute: AuthGuardLibraryCategoriesLazyRoute,
  AuthGuardLibraryPaymentsLazyRoute: AuthGuardLibraryPaymentsLazyRoute,
}

const AuthGuardLibraryRouteRouteWithChildren =
  AuthGuardLibraryRouteRoute._addFileChildren(
    AuthGuardLibraryRouteRouteChildren,
  )

interface AuthGuardRouteRouteChildren {
  AuthGuardEntitiesRouteRoute: typeof AuthGuardEntitiesRouteRouteWithChildren
  AuthGuardLibraryRouteRoute: typeof AuthGuardLibraryRouteRouteWithChildren
  AuthGuardLogoutLazyRoute: typeof AuthGuardLogoutLazyRoute
  AuthGuardProfileLazyRoute: typeof AuthGuardProfileLazyRoute
  AuthGuardSubscriptionsLazyRoute: typeof AuthGuardSubscriptionsLazyRoute
}

const AuthGuardRouteRouteChildren: AuthGuardRouteRouteChildren = {
  AuthGuardEntitiesRouteRoute: AuthGuardEntitiesRouteRouteWithChildren,
  AuthGuardLibraryRouteRoute: AuthGuardLibraryRouteRouteWithChildren,
  AuthGuardLogoutLazyRoute: AuthGuardLogoutLazyRoute,
  AuthGuardProfileLazyRoute: AuthGuardProfileLazyRoute,
  AuthGuardSubscriptionsLazyRoute: AuthGuardSubscriptionsLazyRoute,
}

const AuthGuardRouteRouteWithChildren = AuthGuardRouteRoute._addFileChildren(
  AuthGuardRouteRouteChildren,
)

interface IdRouteRouteChildren {
  IdLoginRoute: typeof IdLoginRoute
}

const IdRouteRouteChildren: IdRouteRouteChildren = {
  IdLoginRoute: IdLoginRoute,
}

const IdRouteRouteWithChildren =
  IdRouteRoute._addFileChildren(IdRouteRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof IdRouteRouteWithChildren
  '/entities': typeof AuthGuardEntitiesRouteRouteWithChildren
  '/library': typeof AuthGuardLibraryRouteRouteWithChildren
  '/login': typeof IdLoginRoute
  '/logout': typeof AuthGuardLogoutLazyRoute
  '/profile': typeof AuthGuardProfileLazyRoute
  '/subscriptions': typeof AuthGuardSubscriptionsLazyRoute
  '/entities/apps': typeof AuthGuardEntitiesAppsRouteRouteWithChildren
  '/entities/categories': typeof AuthGuardEntitiesCategoriesRouteRouteWithChildren
  '/entities/payments': typeof AuthGuardEntitiesPaymentsRouteRouteWithChildren
  '/entities/subscriptions': typeof AuthGuardEntitiesSubscriptionsRouteRouteWithChildren
  '/library/applications': typeof AuthGuardLibraryApplicationsLazyRoute
  '/library/categories': typeof AuthGuardLibraryCategoriesLazyRoute
  '/library/payments': typeof AuthGuardLibraryPaymentsLazyRoute
  '/entities/apps/$appId': typeof AuthGuardEntitiesAppsAppIdRoute
  '/entities/categories/$categoryId': typeof AuthGuardEntitiesCategoriesCategoryIdRoute
  '/entities/payments/$paymentId': typeof AuthGuardEntitiesPaymentsPaymentIdRoute
  '/entities/subscriptions/$subscriptionId': typeof AuthGuardEntitiesSubscriptionsSubscriptionIdRoute
  '/entities/apps/add': typeof AuthGuardEntitiesAppsAddLazyRoute
  '/entities/categories/add': typeof AuthGuardEntitiesCategoriesAddLazyRoute
  '/entities/payments/add': typeof AuthGuardEntitiesPaymentsAddLazyRoute
  '/entities/subscriptions/add': typeof AuthGuardEntitiesSubscriptionsAddLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof IdRouteRouteWithChildren
  '/entities': typeof AuthGuardEntitiesRouteRouteWithChildren
  '/library': typeof AuthGuardLibraryRouteRouteWithChildren
  '/login': typeof IdLoginRoute
  '/logout': typeof AuthGuardLogoutLazyRoute
  '/profile': typeof AuthGuardProfileLazyRoute
  '/subscriptions': typeof AuthGuardSubscriptionsLazyRoute
  '/entities/apps': typeof AuthGuardEntitiesAppsRouteRouteWithChildren
  '/entities/categories': typeof AuthGuardEntitiesCategoriesRouteRouteWithChildren
  '/entities/payments': typeof AuthGuardEntitiesPaymentsRouteRouteWithChildren
  '/entities/subscriptions': typeof AuthGuardEntitiesSubscriptionsRouteRouteWithChildren
  '/library/applications': typeof AuthGuardLibraryApplicationsLazyRoute
  '/library/categories': typeof AuthGuardLibraryCategoriesLazyRoute
  '/library/payments': typeof AuthGuardLibraryPaymentsLazyRoute
  '/entities/apps/$appId': typeof AuthGuardEntitiesAppsAppIdRoute
  '/entities/categories/$categoryId': typeof AuthGuardEntitiesCategoriesCategoryIdRoute
  '/entities/payments/$paymentId': typeof AuthGuardEntitiesPaymentsPaymentIdRoute
  '/entities/subscriptions/$subscriptionId': typeof AuthGuardEntitiesSubscriptionsSubscriptionIdRoute
  '/entities/apps/add': typeof AuthGuardEntitiesAppsAddLazyRoute
  '/entities/categories/add': typeof AuthGuardEntitiesCategoriesAddLazyRoute
  '/entities/payments/add': typeof AuthGuardEntitiesPaymentsAddLazyRoute
  '/entities/subscriptions/add': typeof AuthGuardEntitiesSubscriptionsAddLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_auth-guard': typeof AuthGuardRouteRouteWithChildren
  '/_id': typeof IdRouteRouteWithChildren
  '/_auth-guard/entities': typeof AuthGuardEntitiesRouteRouteWithChildren
  '/_auth-guard/library': typeof AuthGuardLibraryRouteRouteWithChildren
  '/_id/login': typeof IdLoginRoute
  '/_auth-guard/logout': typeof AuthGuardLogoutLazyRoute
  '/_auth-guard/profile': typeof AuthGuardProfileLazyRoute
  '/_auth-guard/subscriptions': typeof AuthGuardSubscriptionsLazyRoute
  '/_auth-guard/entities/apps': typeof AuthGuardEntitiesAppsRouteRouteWithChildren
  '/_auth-guard/entities/categories': typeof AuthGuardEntitiesCategoriesRouteRouteWithChildren
  '/_auth-guard/entities/payments': typeof AuthGuardEntitiesPaymentsRouteRouteWithChildren
  '/_auth-guard/entities/subscriptions': typeof AuthGuardEntitiesSubscriptionsRouteRouteWithChildren
  '/_auth-guard/library/applications': typeof AuthGuardLibraryApplicationsLazyRoute
  '/_auth-guard/library/categories': typeof AuthGuardLibraryCategoriesLazyRoute
  '/_auth-guard/library/payments': typeof AuthGuardLibraryPaymentsLazyRoute
  '/_auth-guard/entities/apps/$appId': typeof AuthGuardEntitiesAppsAppIdRoute
  '/_auth-guard/entities/categories/$categoryId': typeof AuthGuardEntitiesCategoriesCategoryIdRoute
  '/_auth-guard/entities/payments/$paymentId': typeof AuthGuardEntitiesPaymentsPaymentIdRoute
  '/_auth-guard/entities/subscriptions/$subscriptionId': typeof AuthGuardEntitiesSubscriptionsSubscriptionIdRoute
  '/_auth-guard/entities/apps/add': typeof AuthGuardEntitiesAppsAddLazyRoute
  '/_auth-guard/entities/categories/add': typeof AuthGuardEntitiesCategoriesAddLazyRoute
  '/_auth-guard/entities/payments/add': typeof AuthGuardEntitiesPaymentsAddLazyRoute
  '/_auth-guard/entities/subscriptions/add': typeof AuthGuardEntitiesSubscriptionsAddLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/entities'
    | '/library'
    | '/login'
    | '/logout'
    | '/profile'
    | '/subscriptions'
    | '/entities/apps'
    | '/entities/categories'
    | '/entities/payments'
    | '/entities/subscriptions'
    | '/library/applications'
    | '/library/categories'
    | '/library/payments'
    | '/entities/apps/$appId'
    | '/entities/categories/$categoryId'
    | '/entities/payments/$paymentId'
    | '/entities/subscriptions/$subscriptionId'
    | '/entities/apps/add'
    | '/entities/categories/add'
    | '/entities/payments/add'
    | '/entities/subscriptions/add'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/entities'
    | '/library'
    | '/login'
    | '/logout'
    | '/profile'
    | '/subscriptions'
    | '/entities/apps'
    | '/entities/categories'
    | '/entities/payments'
    | '/entities/subscriptions'
    | '/library/applications'
    | '/library/categories'
    | '/library/payments'
    | '/entities/apps/$appId'
    | '/entities/categories/$categoryId'
    | '/entities/payments/$paymentId'
    | '/entities/subscriptions/$subscriptionId'
    | '/entities/apps/add'
    | '/entities/categories/add'
    | '/entities/payments/add'
    | '/entities/subscriptions/add'
  id:
    | '__root__'
    | '/'
    | '/_auth-guard'
    | '/_id'
    | '/_auth-guard/entities'
    | '/_auth-guard/library'
    | '/_id/login'
    | '/_auth-guard/logout'
    | '/_auth-guard/profile'
    | '/_auth-guard/subscriptions'
    | '/_auth-guard/entities/apps'
    | '/_auth-guard/entities/categories'
    | '/_auth-guard/entities/payments'
    | '/_auth-guard/entities/subscriptions'
    | '/_auth-guard/library/applications'
    | '/_auth-guard/library/categories'
    | '/_auth-guard/library/payments'
    | '/_auth-guard/entities/apps/$appId'
    | '/_auth-guard/entities/categories/$categoryId'
    | '/_auth-guard/entities/payments/$paymentId'
    | '/_auth-guard/entities/subscriptions/$subscriptionId'
    | '/_auth-guard/entities/apps/add'
    | '/_auth-guard/entities/categories/add'
    | '/_auth-guard/entities/payments/add'
    | '/_auth-guard/entities/subscriptions/add'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthGuardRouteRoute: typeof AuthGuardRouteRouteWithChildren
  IdRouteRoute: typeof IdRouteRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthGuardRouteRoute: AuthGuardRouteRouteWithChildren,
  IdRouteRoute: IdRouteRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_auth-guard",
        "/_id"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_auth-guard": {
      "filePath": "_auth-guard/route.tsx",
      "children": [
        "/_auth-guard/entities",
        "/_auth-guard/library",
        "/_auth-guard/logout",
        "/_auth-guard/profile",
        "/_auth-guard/subscriptions"
      ]
    },
    "/_id": {
      "filePath": "_id/route.tsx",
      "children": [
        "/_id/login"
      ]
    },
    "/_auth-guard/entities": {
      "filePath": "_auth-guard/entities/route.tsx",
      "parent": "/_auth-guard",
      "children": [
        "/_auth-guard/entities/apps",
        "/_auth-guard/entities/categories",
        "/_auth-guard/entities/payments",
        "/_auth-guard/entities/subscriptions"
      ]
    },
    "/_auth-guard/library": {
      "filePath": "_auth-guard/library/route.tsx",
      "parent": "/_auth-guard",
      "children": [
        "/_auth-guard/library/applications",
        "/_auth-guard/library/categories",
        "/_auth-guard/library/payments"
      ]
    },
    "/_id/login": {
      "filePath": "_id/login.tsx",
      "parent": "/_id"
    },
    "/_auth-guard/logout": {
      "filePath": "_auth-guard/logout.lazy.tsx",
      "parent": "/_auth-guard"
    },
    "/_auth-guard/profile": {
      "filePath": "_auth-guard/profile.lazy.tsx",
      "parent": "/_auth-guard"
    },
    "/_auth-guard/subscriptions": {
      "filePath": "_auth-guard/subscriptions.lazy.tsx",
      "parent": "/_auth-guard"
    },
    "/_auth-guard/entities/apps": {
      "filePath": "_auth-guard/entities/apps/route.tsx",
      "parent": "/_auth-guard/entities",
      "children": [
        "/_auth-guard/entities/apps/$appId",
        "/_auth-guard/entities/apps/add"
      ]
    },
    "/_auth-guard/entities/categories": {
      "filePath": "_auth-guard/entities/categories/route.tsx",
      "parent": "/_auth-guard/entities",
      "children": [
        "/_auth-guard/entities/categories/$categoryId",
        "/_auth-guard/entities/categories/add"
      ]
    },
    "/_auth-guard/entities/payments": {
      "filePath": "_auth-guard/entities/payments/route.tsx",
      "parent": "/_auth-guard/entities",
      "children": [
        "/_auth-guard/entities/payments/$paymentId",
        "/_auth-guard/entities/payments/add"
      ]
    },
    "/_auth-guard/entities/subscriptions": {
      "filePath": "_auth-guard/entities/subscriptions/route.tsx",
      "parent": "/_auth-guard/entities",
      "children": [
        "/_auth-guard/entities/subscriptions/$subscriptionId",
        "/_auth-guard/entities/subscriptions/add"
      ]
    },
    "/_auth-guard/library/applications": {
      "filePath": "_auth-guard/library/applications.lazy.tsx",
      "parent": "/_auth-guard/library"
    },
    "/_auth-guard/library/categories": {
      "filePath": "_auth-guard/library/categories.lazy.tsx",
      "parent": "/_auth-guard/library"
    },
    "/_auth-guard/library/payments": {
      "filePath": "_auth-guard/library/payments.lazy.tsx",
      "parent": "/_auth-guard/library"
    },
    "/_auth-guard/entities/apps/$appId": {
      "filePath": "_auth-guard/entities/apps/$appId.tsx",
      "parent": "/_auth-guard/entities/apps"
    },
    "/_auth-guard/entities/categories/$categoryId": {
      "filePath": "_auth-guard/entities/categories/$categoryId.tsx",
      "parent": "/_auth-guard/entities/categories"
    },
    "/_auth-guard/entities/payments/$paymentId": {
      "filePath": "_auth-guard/entities/payments/$paymentId.tsx",
      "parent": "/_auth-guard/entities/payments"
    },
    "/_auth-guard/entities/subscriptions/$subscriptionId": {
      "filePath": "_auth-guard/entities/subscriptions/$subscriptionId.tsx",
      "parent": "/_auth-guard/entities/subscriptions"
    },
    "/_auth-guard/entities/apps/add": {
      "filePath": "_auth-guard/entities/apps/add.lazy.tsx",
      "parent": "/_auth-guard/entities/apps"
    },
    "/_auth-guard/entities/categories/add": {
      "filePath": "_auth-guard/entities/categories/add.lazy.tsx",
      "parent": "/_auth-guard/entities/categories"
    },
    "/_auth-guard/entities/payments/add": {
      "filePath": "_auth-guard/entities/payments/add.lazy.tsx",
      "parent": "/_auth-guard/entities/payments"
    },
    "/_auth-guard/entities/subscriptions/add": {
      "filePath": "_auth-guard/entities/subscriptions/add.lazy.tsx",
      "parent": "/_auth-guard/entities/subscriptions"
    }
  }
}
ROUTE_MANIFEST_END */