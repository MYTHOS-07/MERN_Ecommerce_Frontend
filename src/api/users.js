import api from ".";

export const updateUser = async (id, data) => {
  const response = await api.put(`/api/users/${id}`, data);

  return response.data;
};

export const updateProfileImage = async (id, data) => {
  const response = await api.patch(`/api/users/${id}/profile-image`, data);

  return response.data;
};

export const getAllUsers = async () => {
  const response = await api.get(`/api/users`);

  return response.data;
};

export const updateUserRoles = async (id, roles) => {
  const response = await api.put(`/api/users/${id}`, { roles });

  return response.data;
};
