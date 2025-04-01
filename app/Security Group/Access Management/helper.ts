export const getPermissionColor = (permission: string) => {
    switch (permission) {
      case "Read":
        return { backgroundColor: "#E3F2FD", color: "#1E88E5" };
      case "Execute":
        return { backgroundColor: "#E8F5E9", color: "#43A047" };
      case "Modify":
        return { backgroundColor: "#FFF3E0", color: "#FB8C00" };
      case "Approve":
        return { backgroundColor: "#FFEBEE", color: "#E53935" };
      default:
        return { backgroundColor: "#F5F5F5", color: "#757575" };
    }
  };