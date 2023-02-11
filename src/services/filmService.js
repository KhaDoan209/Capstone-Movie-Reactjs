import { API_URL } from '../settings/settings';
import { TOKEN_CYBER } from '../settings/settings';
import axios from 'axios';
class FilmService {
   getFilmList() {
      let promise = axios({
         method: 'GET',
         url: `${API_URL}/QuanLyPhim/LayDanhSachPhim`,
         maNhom: 'GP01',
         headers: {
            TokenCybersoft: TOKEN_CYBER,
         },
      });
      return promise;
   }
}
export default FilmService;
