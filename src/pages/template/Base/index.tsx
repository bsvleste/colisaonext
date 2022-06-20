import { useContext } from 'react';
import Menu from 'components/Menu';
import { AuthContext } from 'contexts/AuthContext';
export type BaseTemplateProps = {
  children: React.ReactNode;
};
const Base = ({ children }: BaseTemplateProps) => {
  return (
    <section>
      <Menu />
      {children}
    </section>
  );
};
export default Base;
