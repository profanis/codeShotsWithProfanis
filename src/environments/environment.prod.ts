export const environment = {
  production: true,
  component: {
    path: () => import('../app/admin/admin.component'),
    inputs: {
      user: 'profanis is an admin',
    },
  },
};
