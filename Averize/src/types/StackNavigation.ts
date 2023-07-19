export type StackParamList = {
    home: undefined,
    grades: {
        course: string,
        semester: string,
        semesterId: string,
    },
    semesters: {
        type: string,
    },
    ratings: {
        subject: string,
    },
    averages: {
        subject: string,
        M1: number,
        M2: number,
        MF: number,  
    },
}