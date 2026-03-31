import apiClient from "@/lib/axios";

export type CourseType = "IELTS" | "TOEIC";

export interface SelectCourseRequest {
  courseType: CourseType;
}

export interface SelectCourseResponse {
  message: string;
  courseType: CourseType;
}

export const courseService = {
  selectCourse: (data: SelectCourseRequest) =>
    apiClient.post<SelectCourseResponse>("/courses/select", data),
};
