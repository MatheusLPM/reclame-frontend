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

export const getPerfilComplaints = async (id, currentPage, selectFilter, changeComplaint) => {
    try {
        const { data } = await api.get(`empresa/reclamacao/${id}/${currentPage}/${selectFilter}?search=${changeComplaint}`);
        return data;
    } catch (error) {
        console.log("Erro ao buscar os dados:", error)
        throw error;
    }
}

export const getUserComplaints = async (currentPage, selectFilter, changeComplaint) => {
    try {
        const { data } = await api.get(`user/reclamacao/${currentPage}/${selectFilter}?search=${changeComplaint}`);
        return data;
    } catch (error) {
        console.log("Erro aso bucar os dados", error)
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

export const updatePassword = async (formData) => {
    try {
        const { data } = await api.put('/alterar/empresa/senha', formData);
        return data;
    } catch (error) {
        console.log("Erro ao buscar os dados:", error)
        throw error;
    }
}

export const updateSite = async (formData) => {
    try {
        const { data } = await api.put('/alterar/empresa/site', formData);
        return data;
    } catch (error) {
        console.log("Erro ao buscar os dados:", error)
        throw error;
    }
}

export const updatePerfil = async (formData) => {
    try {

        const { data } = await api.post('perfil/empresa', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        return data;

    } catch (error) {
        console.log("Erro ao buscar os dados:", error)
        throw error;
    }
}

export const updatePhoto = async (formData, id) => {
    try {

        const { data } = await api.post(`foto/consumidor/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        return data;

    } catch (error) {
        console.log("Erro ao buscar os dados:", error)
        throw error;
    }
}

export const updatePasswordConsumer = async (formData) => {
    try {
        const { data } = await api.put('/alterar/consumidor/senha', formData);
        return data;
    } catch (error) {
        console.log("Erro ao buscar os dados:", error)
        throw error;
    }
}