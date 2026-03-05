import { AuthGuard } from '@ghostfolio/client/core/auth.guard';
import { publicRoutes } from '@ghostfolio/common/routes/routes';

import { Routes } from '@angular/router';

import { GfBlogPageComponent } from './blog-page.component';

export const routes: Routes = [
  {
    canActivate: [AuthGuard],
    component: GfBlogPageComponent,
    path: '',
    title: publicRoutes.blog.title
  },
  {
    canActivate: [AuthGuard],
    path: '2022/07/how-do-i-get-my-finances-in-order',
    loadComponent: () =>
      import('./2022/07/how-do-i-get-my-finances-in-order/how-do-i-get-my-finances-in-order-page.component').then(
        (c) => c.HowDoIGetMyFinancesInOrderPageComponent
      ),
    title: 'How do I get my finances in order?'
  },
  {
    canActivate: [AuthGuard],
    path: '2022/12/the-importance-of-tracking-your-personal-finances',
    loadComponent: () =>
      import('./2022/12/the-importance-of-tracking-your-personal-finances/the-importance-of-tracking-your-personal-finances-page.component').then(
        (c) => c.TheImportanceOfTrackingYourPersonalFinancesPageComponent
      ),
    title: 'The importance of tracking your personal finances'
  },
  {
    canActivate: [AuthGuard],
    path: '2023/05/unlock-your-financial-potential-with-ghostfolio',
    loadComponent: () =>
      import('./2023/05/unlock-your-financial-potential-with-ghostfolio/unlock-your-financial-potential-with-ghostfolio-page.component').then(
        (c) => c.UnlockYourFinancialPotentialWithGhostfolioPageComponent
      ),
    title: 'Unlock your Financial Potential with Portfolio'
  },
  {
    canActivate: [AuthGuard],
    path: '2023/07/exploring-the-path-to-fire',
    loadComponent: () =>
      import('./2023/07/exploring-the-path-to-fire/exploring-the-path-to-fire-page.component').then(
        (c) => c.ExploringThePathToFirePageComponent
      ),
    title: 'Exploring the Path to FIRE'
  }
];
