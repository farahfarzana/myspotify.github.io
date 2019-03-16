import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  getHeader(query: string) {
    const url = "https://api.spotify.com/v1/" + query;
    let headers = new HttpHeaders();
    headers = headers.append(
      "Authorization",
      "Bearer BQAfQl4MFyEQfrKkt1APiu5hmoAx9Oid94LASt4BL8UHdUhW1Hbso_bXXBN2AZXropwwyzM2sTAOpR8k_NCEg_hO8BwJK8nv4CYUho3LbLFT_1cDkLQWWuqC1qdtVOIHSuI34HP2oXmky3AMdUw3_JHoJr-fjOV4VXBQarIt8vpE2lUXBkQNbUcaFVPrZnEeJPVAlK0YYWGKDveElJU76SG0d5b7-P5gEsEuUeKYG57UIKBGM8nJatO60Y8ajEOhbNe-UqUfezcNjOi-rjBNHb0gsxWM7L2Jrwg"
    );
    return this._http.get(url, { headers });
  }
  constructor(private _http: HttpClient) {}

  searchMusic(str: string, type = "artist") {
    const param = "&offset=0" + "&limit=20" + "&type=" + type + "&market=US";
    const query = "search?query=" + str + param;
    return this.getHeader(query);
  }

  searchArtistAlbum(id: string) {
    const query = `artists/${id}/albums`;
    return this.getHeader(query);
  }

  searchArtist(id: string) {
    const query = `artists/${id}`;
    return this.getHeader(query);
  }

  searchAlbumById(id: string) {
    const query = `albums/${id}`;
    return this.getHeader(query);
  }

  searchAlbumByIdTracks(id: string) {
    const query = `albums/${id}/tracks`;
    return this.getHeader(query);
  }
}
