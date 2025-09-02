import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/core/services/news.service';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  articles: any[] = [];
  isModalOpen = false;
  selectedArticle: any = null;

  constructor(
    private newsService: NewsService,
    private iab: InAppBrowser,
    private router: Router
  ) {}

  ngOnInit() {
    const session = localStorage.getItem('session');
    if (!session) {
      this.router.navigate(['/login']);
      return;
    }
    this.loadNews();
  }

  loadNews(event?: any) {
    this.newsService.getTopHeadlines().subscribe({
      next: (data) => {
        this.articles = data.articles;
        if (event) event.target.complete(); // cierra refresher
      },
      error: (err) => {
        console.error('Error cargando noticias', err);
        if (event) event.target.complete();
      }
    });
  }

  openArticle(article: any) {
    this.selectedArticle = article;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  openInAppBrowser(url: string) {
    this.iab.create(url, '_system');
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  logout() {
    localStorage.removeItem('session');
    this.router.navigate(['/login']);
  }
}
