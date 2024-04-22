
import { useLocation } from 'react-router-dom';
export function handleurl(str, position) {
    return str.split('/')[position];
}



export function UseLastPathname() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/');
  return pathSegments[pathSegments.length - 1];
}