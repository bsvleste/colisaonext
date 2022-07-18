import Menu from 'components/Menu';
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
