import React from "react";

import ConfigComponent from "../../../../Components/ConfigComponent";
import { useState } from "react";
import { StyledConfigCompany } from "./style";
import Swal from "sweetalert2";
import { api } from "../../../../Services/server";


export default function ConfigCompany(props) {

    const [descricao, setDescricao] = useState('');
    const [fotoPerfil, setFotoPerfil] = useState(null);

    function normalizeError(erro) {

        return erro.replace(/\([^)]*\)/g, '');
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (descricao == '' && fotoPerfil == null) {
            return Swal.fire({
                position: "center",
                icon: "error",
                text: "Campos vazios",
                showConfirmButton: false,
            });
        }

        const formData = new FormData();

        formData.append('descricao', descricao);
        if (fotoPerfil != null) {
            formData.append('fotoPerfil', fotoPerfil);

        }
        formData.append('id_empresa', props.empresa);

        try {

            const { data } = await api.post('perfil/empresa', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log(data)

            Swal.fire({
                position: "center",
                icon: "success",
                title: "Dados salvos com sucesso",
                showConfirmButton: false,
                timer: 1000
            });

        } catch (error) {
            const erro = normalizeError(error.response.data.message);

            Swal.fire({
                position: "center",
                icon: "error",
                text: erro,
                showConfirmButton: false,
            });
        }
    }

    return (
        <StyledConfigCompany hasFile={fotoPerfil != null}>
            <ConfigComponent
                expandIcon={(
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                )}
                summaryIcon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#212121" viewBox="0 0 16 16">
                        <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5" />
                        <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z" />
                    </svg>
                }
                summaryTitle="Alterar Foto e Descrição"
            >
                <form >
                    <label htmlFor="descricao">Descrição</label>
                    <textarea
                        maxLength="650"
                        className="desc"
                        id="descricao"
                        placeholder="Adicione uma descrição..."
                        onChange={(event) => setDescricao(event.target.value)}
                    />
                    <div className="image-upload">
                        <label>Adicionar Logo</label>
                        <div>
                            <label
                                htmlFor="logo"
                            >Upload</label>
                        </div>
                        <input
                            type="file"
                            name="imagem"
                            accept="image/*"
                            id="logo"
                            multiple
                            onChange={(event) => setFotoPerfil(event.target.files[0])}
                        />
                    </div>
                    <button onSubmit={handleSubmit} onClick={handleSubmit}>Atualizar</button>
                </form>
            </ConfigComponent>
        </StyledConfigCompany>
    );
}