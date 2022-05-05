import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Album, AlbumPhotos} from './models';


@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  URL = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private client: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    return this.client.get<Album[]>(`${this.URL}`);
  }

  addAlbum(album: Album): Observable<Album> {
    return this.client.post<Album>(`${this.URL}`, album);
  }

  getAlbum(id: number): Observable<Album> {
    return this.client.get<Album>(`${this.URL}/${id}`);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.client.put<Album>(`${this.URL}/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<any> {
    return this.client.delete(`${this.URL}/${id}`);
  }

  getAlbumPhotos(id: number): Observable<AlbumPhotos[]> {
    return this.client.get<AlbumPhotos[]>(`${this.URL}/${id}/photos`);
  }
}