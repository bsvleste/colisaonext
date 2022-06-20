type User = {
  permissions: string[];
  roles: string[];
};
type ValidateUserPermissionsParams = {
  user: User;
  permissions?: string[];
  roles?: string[];
};
export function validateUserPermissions({
  user,
  permissions,
  roles,
}: ValidateUserPermissionsParams) {
  if (permissions?.length > 0) {
    console.log(`tamanho da ${permissions}`);
    const hasAllPermissions = permissions?.every((permission) => {
      return user.permissions.includes(permission);
    });
    console.log('Has Permission');
    if (!hasAllPermissions) {
      return false;
    }
  }
  if (roles?.length > 0) {
    console.log(`tamanho da ${roles}`);
    const hasAllRoles = roles?.some((role) => {
      return user.roles.includes(role);
    });
    if (!hasAllRoles) {
      return false;
    }
    return true;
  }
}
