---
description: Come aggiungere un nuovo articolo al Blog del Portfolio
---

# Come Aggiungere un Nuovo Blog Post

Questa guida spiega come inserire un nuovo articolo nel blog interno della piattaforma Portfolio (PizzaForex).

## Prerequisiti
- Il server di sviluppo deve essere attivo (`npm run start:client`)
- Devi conoscere il titolo, la data e il contenuto dell'articolo

## Passaggi

### 1. Crea la cartella del post

La struttura è: `apps/client/src/app/pages/blog/ANNO/MESE/slug-del-titolo/`

Esempio per un post di Marzo 2026 intitolato "Guida al Portfolio Tracking":
```
apps/client/src/app/pages/blog/2026/03/guida-al-portfolio-tracking/
```

### 2. Crea il file HTML del post

Crea il file `guida-al-portfolio-tracking-page.html` dentro la cartella:

```html
<div class="blog container">
  <div class="row">
    <div class="col-md-8 offset-md-2">
      <article>
        <div class="mb-4">
          <h1>Guida al Portfolio Tracking</h1>
          <div class="text-muted mb-3">2026-03-05</div>
        </div>

        <!-- Immagine opzionale -->
        <!-- <img class="img-fluid mb-4 rounded" src="../assets/images/blog/nome-immagine.jpg" /> -->

        <section class="mb-4">
          <p>Qui il testo del tuo articolo...</p>
          <p>Puoi usare tutti i tag HTML normali: <strong>grassetto</strong>, <em>corsivo</em>, liste, ecc.</p>
        </section>

        <section class="mb-4">
          <h2>Sottotitolo</h2>
          <p>Altro contenuto...</p>
        </section>

        <section class="mb-4 py-4">
          <h2 class="h4 mb-0 text-center" i18n>
            Would you like to learn more?
          </h2>
          <p class="lead mb-2 text-center" i18n>
            Portfolio helps you track your investments and personal finances.
          </p>
        </section>

        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a i18n [routerLink]="routerLinkBlog">Blog</a>
            </li>
            <li aria-current="page" class="active breadcrumb-item" i18n>
              Guida al Portfolio Tracking
            </li>
          </ol>
        </nav>
      </article>
    </div>
  </div>
</div>
```

### 3. Crea il file TypeScript del componente

Crea `guida-al-portfolio-tracking-page.component.ts`:

```typescript
import { publicRoutes } from '@ghostfolio/common/routes/routes';

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  host: { class: 'page' },
  imports: [RouterModule],
  selector: 'gf-guida-al-portfolio-tracking-page',
  standalone: true,
  templateUrl: './guida-al-portfolio-tracking-page.html'
})
export class GuidaAlPortfolioTrackingPageComponent {
  public routerLinkBlog = publicRoutes.blog.routerLink;
}
```

### 4. Registra la rotta nel router

Apri `apps/client/src/app/pages/blog/blog-page.routes.ts` e aggiungi **prima** della chiusura `];`:

```typescript
  {
    canActivate: [AuthGuard],
    path: '2026/03/guida-al-portfolio-tracking',
    loadComponent: () =>
      import('./2026/03/guida-al-portfolio-tracking/guida-al-portfolio-tracking-page.component').then(
        (c) => c.GuidaAlPortfolioTrackingPageComponent
      ),
    title: 'Guida al Portfolio Tracking'
  }
```

### 5. Aggiungi il link nella pagina indice

Apri `apps/client/src/app/pages/blog/blog-page.html` e aggiungi una nuova card **in cima** (subito dopo `<h1>`):

```html
      <mat-card appearance="outlined" class="mb-3">
        <mat-card-content class="p-0">
          <div class="container p-0">
            <div class="flex-nowrap no-gutters row">
              <a class="d-flex overflow-hidden p-3 w-100" href="../en/blog/2026/03/guida-al-portfolio-tracking">
                <div class="flex-grow-1 overflow-hidden">
                  <div class="h6 m-0 text-truncate">Guida al Portfolio Tracking</div>
                  <div class="d-flex text-muted">2026-03-05</div>
                </div>
                <div class="align-items-center d-flex">
                  <ion-icon class="chevron text-muted" name="chevron-forward-outline" size="small" />
                </div>
              </a>
            </div>
          </div>
        </mat-card-content>
      </mat-card>
```

### 6. (Opzionale) Aggiungi un'immagine

Se vuoi un'immagine di copertina, salvala in:
```
apps/client/src/assets/images/blog/nome-immagine.jpg
```
E decommentala nel file HTML del post.

### 7. Verifica e pubblica

// turbo
1. Verifica che il server compili senza errori nel terminale
2. Vai su `http://localhost:4200/en/blog` e controlla che il nuovo post appaia
3. Clicca per verificare che il contenuto si apra correttamente
4. Quando sei soddisfatto, fai il push su GitHub
