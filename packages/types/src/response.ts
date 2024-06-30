export type ErrorResponse = {
    instance: string;
    path: string;
    data: {
        reasons: Array<string>,
    };
    title: string;
    description: string;
};

export type ProductResponse = {
    name: string;
    description: string;
    amount: string;
};
