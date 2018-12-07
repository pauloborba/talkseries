interface Comment {
    content: string;
    show: Show["id"];
    id: number;
    data_post: Date;
    user: User["username"];
}
