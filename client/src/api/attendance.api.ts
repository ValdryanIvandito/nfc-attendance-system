import { axiosClient } from "./_axiosClient";

export const attendanceAPI = {
  getAll: async (
    page: number,
    limit: number,
    search?: string,
    dateStart?: string,
    dateEnd?: string
  ) => {
    const params = new URLSearchParams();

    params.append("page", String(page));
    params.append("limit", String(limit));
    params.append("dateStart", String(dateStart));
    params.append("dateEnd", String(dateEnd));

    if (search) params.append("search", search);

    const res = await axiosClient.get(`/attendance?${params.toString()}`);

    return {
      page: res.data.data.page,
      limit: res.data.data.limit,
      total: res.data.data.total,
      totalPages: res.data.data.totalPages,
      attendances: res.data.data.data, // array attendance
    };
  },
};
