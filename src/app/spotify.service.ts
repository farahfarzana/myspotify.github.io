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
      "Bearer BQCeLR2AuR6IXgj0BaR_8mXFwCcWt4kKy3dLxC4gj8-Tw4Ziexu1c64zcROfvlDPiFn2vKOvIwdj2yrgj6UM1S_CPZl1ftbYbwiWpWX2eDPa6li1ZbqDEfyklevOYEP9EXVmHC6Jn1oWgO2unw1GaxgNq_Juh82hQUqemcT5UqcUETF6aVV8ioS2JW60bZS0WgrEr9s6wasIOqbuKNTZxZMrsSN84w1G4vo1_guW77vVJwAqz-ik59UJC7l_dZxkgq_MVVXjK6csgLJDheypTh364Yz5GyFSBj8"
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
