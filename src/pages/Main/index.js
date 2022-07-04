import { Container, Form, SubmitButton, List, DeleteButton, DeleteAll } from './styles';
import { IoLogoGithub, IoAdd, IoEllipsisVertical, IoTrashBin } from "react-icons/io5";
import { AiOutlineLoading } from 'react-icons/ai'
import { useState, useCallback, useEffect } from 'react';
import api from '../services/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

export default function Main() {

    const [newRepo, setNewRepo] = useState('');
    const [repositorios, setRepositorios] = useState(JSON.parse(localStorage.getItem('@repositorios')) || []);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(null);

    // SALVAR ALTERAÇÕES
    useEffect(() => {
        localStorage.setItem('@repositorios', JSON.stringify(repositorios))
    }, [repositorios])

    const handleDelete = useCallback((repo) => {
        const find = repositorios.filter(r => r.name !== repo);
        setRepositorios(find);
    }, [repositorios]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        (async () => {
            setLoading(true);
            setAlert(null);
            try {

                if (newRepo === '') {
                    toast.warning('Preencha o campo!')
                    throw new Error('Você precisa indicar um caminho!');
                } else if (repositorios.find(repo => repo.name === newRepo)) {
                    toast.warning('Repositório duplicado!')
                    throw new Error('Repositório duplicado!')
                }

                const response = await api.get(`repos/${newRepo}`);

                const data = {
                    name: response.data.full_name,
                }
                setRepositorios([...repositorios, data]);
                setNewRepo('');
                console.log(repositorios)

            } catch (error) {
                if (error.code === 'ERR_BAD_REQUEST') {
                    toast.error('Repositório não encontrado :(', { theme: "colored" });
                }
                setAlert(true);
                console.log(error)

            } finally {
                setLoading(false);
            }

        })();


    }, [newRepo, repositorios]);

    function handleInputChange(e) {
        setNewRepo(e.target.value);
        setAlert(null);
    }

    function handleDeleteAll() {
        setRepositorios([]);
    }

    return (
        <Container>
            <h1>
                <IoLogoGithub size={24} />
                Meus repositórios</h1>

            <Form onSubmit={handleSubmit} error={alert}>
                <input
                    value={newRepo}
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Adicionar repositório (user/repository)' />

                <SubmitButton loading={loading ? 1 : 0} >
                    {loading ?
                        (<AiOutlineLoading size={18} color='#FFF' />)
                        :
                        (<IoAdd size={18} color='#FFF' />)}
                </SubmitButton>
            </Form>

            <List>
                {repositorios.length === 0 && (
                    <span className='emptyMsg'>Não há repositórios salvos :(</span>
                )}
                {repositorios.map((repo, index) => (
                    <li key={index}>
                        <DeleteButton onClick={() => handleDelete(repo.name)}>
                            <IoTrashBin size={16} />
                        </DeleteButton>
                        <span>{repo.name}</span>
                        <Link to={`/repos_project/repositorio/${encodeURIComponent(repo.name)}`}>
                            <IoEllipsisVertical size={20} />
                        </Link>
                    </li>
                ))}

                    {repositorios.length > 1 && (
                        <DeleteAll>
                            <button onClick={handleDeleteAll}>Deletar todos</button>
                        </DeleteAll>
                    )}
            </List>

        </Container>
    )
};
