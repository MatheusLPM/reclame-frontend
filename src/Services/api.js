import { api } from "./server";


export const getCategorys = async () => {
    try {
        const { data } = await api.get("categoria");
        return data;
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        throw error;
    }
};

export const getEstate = async () => {
    try {
        const { data } = await api.get("estado");
        return data;
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        throw error;
    }
};

export const getCompany = async () => {
    try {
        const { data } = await api.get("empresa");
        return data;
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        throw error;
    }
};

export const getConsumer = async () => {
    try {
        const { data } = await api.get('authConsumidor');
        return data;
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        throw error;
    }
}

export const getShowCompany = async () => {
    try {
        const { data } = await api.get('authEmpresa');
        return data;
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        throw error;
    }
}


export const findCategory = async () => {
    try {
        const { data } = await api.get('categoria/lista');
        return data;
    } catch (error) {
        console.log("Erro ao buscar dados:", error);
        throw error;
    }
}

export const showCompany = async (id) => {
    try {

        const { data } = await api.get(`showCompany/${id}`);
        return data;
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        throw error;
    }
};

export const getComplaintCat = async () => {

    try {
        const { data } = await api.get('categoria/reclamacao');
        return data;
    } catch (error) {
        console.log("Erro ao buscar dados:", error);
        throw error;
    }
}

export const getStatusComplaint = async () => {
    try {
        const { data } = await api.get('status/reclamacao');
        return data;
    } catch (error) {
        console.log("Erro ao buscar os dados:", error)
        throw error;
    }
}

export const getPerfilComplaints = async (id) => {
    try {
        const { data } = await api.get(`empresa/reclamacao/${id}`)
        return data;
    } catch (error) {
        console.log("Erro ao buscar os dados:", error)
        throw error;
    }
}


export const showCompanyComplaints = async (id) => {
    try {
        const { data } = await api.get(`reclamacao/${id}`);
        return data;
    } catch (error) {
        console.log("Erro ao buscar os dados:", error)
        throw error;
    }
}

export const getConsumerComplaints = async () => {
    try {
        const { data } = await api.get('consumidor/reclamacao');
        return data;
    } catch (error) {
        console.log("Erro aso bucar os dados", error)
        throw error;
    }
}

export const getCompanyComplaints = async () => {
    try {
        const { data } = await api.get('empresa/reclamacao');
        return data;
    } catch (error) {
        console.log("Erro aso bucar os dados", error)
        throw error;
    }
}


export const getUserAuth = async () => {

    if (!localStorage.getItem('token')) {
        return false;
    }
    try {
        const { data } = await api.get('getUser');
        return data;
    } catch (error) {
        console.log("Erro aso bucar os dados", error)
        throw error;
    }
}

export const findChildrenComplaint = async (id) => {
    try {
        const { data } = await api.get(`reclamacao/filho/${id}`);
        return data;
    } catch (error) {
        console.log("Erro ao buscar os dados:", error)
        throw error;
    }
}

export const showPerfil = async (id) => {
    try {
        const { data } = await api.get(`perfil/${id}`);
        return data;
    } catch (error) {
        console.log("Erro ao buscar os dados:", error)
        throw error;
    }
}