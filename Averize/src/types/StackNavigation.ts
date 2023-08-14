export type StackParamList = {
    home: undefined,
    courses: {
        newOldId: any
    },
    semesters: {
        type: string,
        newOldId: any
    },
    grades: {
        course: string,
        semester: string,
        semesterId: string,
        newOldId: any
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