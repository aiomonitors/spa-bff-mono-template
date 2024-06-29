export type ErrorResponse = {
    instance: string;
    path: string;
    data: {
        reasons: Array<string>,
    };
    title: string;
    description: string;
}
