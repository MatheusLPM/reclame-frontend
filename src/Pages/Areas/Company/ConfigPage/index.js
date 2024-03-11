import React from "react";

import ConfigComponent from "../../../../Components/ConfigComponent";
import { useState } from "react";
import { StyledConfigCompany } from "./style";
import Swal from "sweetalert2";
import { api } from "../../../../Services/server";
import DivSectionForm from "../../../../Components/DivSection";
import validator from "validator";
import { updatePassword } from "../../../../Services/api";
import ReactLoading from 'react-loading';
import { result } from "lodash";
import { useNavigate } from "react-router-dom";



export default function ConfigCompany(props) {

    const [descricao, setDescricao] = useState('');
    const [fotoPerfil, setFotoPerfil] = useState(null);
    const [senha, setSenha] = useState('');
    const [novaSenha, setNovaSenha] = useState('');

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
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
            setLoading(true);

            const { data } = await api.post('perfil/empresa', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setLoading(false);


            Swal.fire({
                position: "center",
                icon: "success",
                title: "Dados salvos com sucesso",
                showConfirmButton: false,
                timer: 1000
            });

        } catch (error) {
            const erro = normalizeError(error.response.data.message);
            setLoading(false);

            Swal.fire({
                position: "center",
                icon: "error",
                text: erro,
                showConfirmButton: false,
            });
        }
    }

    const handleAlterPassword = async (event) => {
        event.preventDefault();

        if (senha == '' && novaSenha == '') {
            return Swal.fire({
                position: "center",
                icon: "error",
                text: "Campos vazios",
                showConfirmButton: false,
            });
        }

        if (senha == '') {
            return Swal.fire({
                position: "center",
                icon: "error",
                text: "O Campo Senha Atual está vazia",
                showConfirmButton: false,
            });
        }

        if (novaSenha == '') {
            return Swal.fire({
                position: "center",
                icon: "error",
                text: "O Campo Nova Senha está vazia",
                showConfirmButton: false,
            });
        }

        if (validator.isStrongPassword(novaSenha)) {

            const formData = {
                senha,
                novaSenha,
                empresa: props.empresa
            }


            try {
                setLoading(true);
                const { data } = await updatePassword(formData);

                setLoading(false);

                return Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Senha alterada com sucesso",
                    showConfirmButton: false,
                    timer: 1000
                }).then(() => {
                    localStorage.removeItem('token');

                    return navigate('/login');
                });

            } catch (error) {
                const erro = normalizeError(error.response.data.message);
                setLoading(false)

                Swal.fire({
                    position: "center",
                    icon: "error",
                    text: erro,
                    showConfirmButton: false,
                });
            }

        } else {
            return Swal.fire({
                position: "center",
                icon: "error",
                text: "A Nova Senha deve conter no mínimo 1 caractere especial, 1 número e 1 letra maiuscula ",
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
                {loading && (<div style={{ position: "fixed", height: "100dvh", width: "100dvw", top: "0", left: "0", zIndex: "5", backgroundColor: "#212121", display: "grid", placeItems: "center", opacity: 0.5 }}>
                    <ReactLoading type="spinningBubbles" color="black" />
                </div>)}
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
            <ConfigComponent
                expandIcon={(
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                )}
                summaryIcon={
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px" fill="#212121">
                        <path d="M 15 2 C 11.145666 2 8 5.1456661 8 9 L 8 11 L 6 11 C 4.895 11 4 11.895 4 13 L 4 25 C 4 26.105 4.895 27 6 27 L 24 27 C 25.105 27 26 26.105 26 25 L 26 13 C 26 11.895 25.105 11 24 11 L 22 11 L 22 9 C 22 5.2715823 19.036581 2.2685653 15.355469 2.0722656 A 1.0001 1.0001 0 0 0 15 2 z M 15 4 C 17.773666 4 20 6.2263339 20 9 L 20 11 L 10 11 L 10 9 C 10 6.2263339 12.226334 4 15 4 z" />
                    </svg>
                }
                summaryTitle="Alterar Senha"
            >
                {loading && (<div style={{ position: "fixed", height: "100dvh", width: "100dvw", top: "0", left: "0", zIndex: "5", backgroundColor: "#212121", display: "grid", placeItems: "center", opacity: 0.5 }}>
                    <ReactLoading type="spinningBubbles" color="black" />
                </div>)}
                <form>
                    <div className="alter-password">

                        <DivSectionForm
                            className="input-password"
                            title="Senha atual"
                            placeholder="Senha..."
                            type="password"
                            value={senha}
                            onChange={(event) => setSenha(event.target.value)}
                            id="senha"
                        />
                        <DivSectionForm
                            className="input-password"
                            title="Nova Senha"
                            placeholder="Nova Senha..."
                            type="password"
                            value={novaSenha}
                            onChange={(event) => setNovaSenha(event.target.value)}
                            id="novaSenha"
                        />
                    </div>
                    <button className="alter-button" onSubmit={handleAlterPassword} onClick={handleAlterPassword}>Alterar</button>

                </form>
            </ConfigComponent>
        </StyledConfigCompany>
    );
}