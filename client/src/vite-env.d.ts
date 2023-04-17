/// <reference types="vite/client" />

declare global {
    type StudentListProps = {
        id: number;
        name: string;
    }

    type ColumnsTableProps = {
        title: string;
        dataIndex: string;
        key: string;
    }

    type ChoiceHeadmanProps = {
        headman: string;
        depHeadman: string;
    }

    interface IStoreContext {
        data: StoreContextProps;
        setAuthStatus: () => void;
    }

    type StoreContextProps = {
        isAuth: boolean;
    }

    type AuthGetRequestProps = {
        message: string;
        login: string;
        status: boolean;
    }

    type StudentListPostRequest = {
        message: string;
        status: boolean;
    }

    type TimePickerProps = {
        hour: number;
        minute: number;
    }
}

export { };