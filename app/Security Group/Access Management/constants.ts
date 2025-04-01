interface Permission {
    name: string;
    type: string;
    permissions: string[];
    source: string;
    approve: boolean;
}

export const data: Permission[] = [
    { name: "Alex Rivera", type: "User", permissions: ["Read", "Execute", "Modify"], source: "Direct Assignment", approve: true },
    { name: "Maria Johnson", type: "User", permissions: ["Read", "Execute", "Modify", "Approve"], source: "Direct Assignment", approve: true },
    { name: "Engineering Team", type: "Group", permissions: ["Read", "Execute", "Modify"], source: "Role: Developer", approve: false },
    { name: "DevOps Team", type: "Group", permissions: ["Read", "Execute"], source: "", approve: false }
];

