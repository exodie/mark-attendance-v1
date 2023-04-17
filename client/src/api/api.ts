import ky from "ky";

// const API_URL = "https://govno-soba4e.onrender.com"; // временный хост (на своей машине)
const API_URL = "http://localhost:3000";

export const getStudentsList = async (): Promise<StudentListProps[]> => {
    const data: StudentListProps[] = await ky.get(`${API_URL}/api/students/get_all_students`).json();

    return data;
}

export const setStudentAttendance = async (list: number[]): Promise<StudentListPostRequest> => {
    const data: StudentListPostRequest = await ky.post(`${API_URL}/api/students/set_selected_students`, { json: list }).json();

    return data;
}

export const studentsAuthorization = async (login: string, password: string): Promise<AuthGetRequestProps> => {
    const data: AuthGetRequestProps = await ky.post(`${API_URL}/api/students/auth`, { json: { login, password } }).json();

    return data;
}

export const closedServer = async () => {
    const data = await ky.post(`${API_URL}/api/admin/stopServer`).json();

    return data;
} 