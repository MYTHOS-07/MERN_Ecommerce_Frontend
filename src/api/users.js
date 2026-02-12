import api from ".";

export const updateUser = async (id, data) => {
  const response = await api.put(`/api/users/${id}`, data);

  return response.data;
};


export const updateProfileImage = async (id, data) => {
  const response = await api.patch(`/api/users/${id}/profile-image`, data);

  return response.data;
};
