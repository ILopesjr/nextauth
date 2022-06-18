import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export default function Dasboard() {
  const { user } = useContext(AuthContext);
  return <h1>Dashboard: {user?.email}</h1>;
}
