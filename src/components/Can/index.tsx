import { UseCan } from 'hooks/useCan';
import { ReactNode } from 'react';

interface CanProps {
  children: ReactNode;
  permissions?: string[];
  roles?: string[];
}
const Can = ({ children, permissions, roles }: CanProps) => {
  const userCanSeeComponent = UseCan({ permissions, roles });
  if (!userCanSeeComponent) {
    return null;
  }
  return <>{children}</>;
};
export default Can;
