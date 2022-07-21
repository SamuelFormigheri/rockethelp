export type IOrder = {
    id: string;
    patrimony: string;
    description: string;
    status: "open" | "closed";
    created_at: string;
    solution?: string;
    closed_at?: string;
}