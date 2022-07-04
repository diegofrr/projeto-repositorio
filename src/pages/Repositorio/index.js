import { useParams } from 'react-router-dom';
import { Container, Owner, Loading, BackButton, IssuesList, PageActions, StateTypes } from './styles';
import { useEffect, useState } from 'react';
import { AiOutlineLoading } from 'react-icons/ai'
import { IoArrowBack, IoArrowForward, IoReturnUpBack } from 'react-icons/io5'

import api from '../services/api';

export default function Repositorio() {
    const { repo_name } = useParams();

    const [repositorio, setRepositorio] = useState({});
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [state, setState] = useState('all');

    useEffect(() => {

        (async () => {
            const nomeRepo = repo_name;
            setLoading(true);

            const [repositorioData, issuesData] = await Promise.all([
                api.get(`/repos/${nomeRepo}`),
                api.get(`/repos/${nomeRepo}/issues`, {
                    params: {
                        state,
                        per_page: 5,
                        page,
                    }
                })
            ]);

            setRepositorio(repositorioData.data);
            setIssues(issuesData.data);
            setLoading(false);
        })();

    }, [repo_name, page, state])

    useEffect(() => {



    }, [])

    function handlePage(action) {
        setPage(action === 'back' ?
            page > 1 ? page - 1 : 1
            :
            page + 1
        );
        setState('all')
    }

    function handleStateChange(newState) {
        setState(newState);
    }

    if (loading) {
        return (
            <Loading>
                <AiOutlineLoading size={30} />
                <span>Aguarde...</span>
            </Loading>
        )
    }

    return (
        <Container>
            <BackButton to='/projeto-repositorios/'>
                <IoReturnUpBack size={20} />
            </BackButton>
            <Owner>
                <img
                    src={repositorio.owner.avatar_url}
                    alt={`Avatar img from: ${repositorio.owner.login}`}
                />
                <h1>{repositorio.name}</h1>
                <p>{repositorio.description}</p>
            </Owner>

            <IssuesList issuesSize={issues.length}>

                <StateTypes>
                    <button onClick={() => handleStateChange('all')} disabled={state === 'all'}>Todas</button>
                    <button onClick={() => handleStateChange('open')} disabled={state === 'open'}>Abertas</button>
                    <button onClick={() => handleStateChange('closed')} disabled={state === 'closed'}>Fechadas</button>
                </StateTypes>

                {issues.map(issue => (
                    <li key={`${issue.id}`}>
                        <img
                            src={issue.user.avatar_url}
                            alt={`Avatar img from: ${issue.user.login}`}
                        />
                        <div>
                            <p>{issue.user.login}</p>
                            <strong>
                                <a target='_blank' href={issue.html_url}>
                                    {issue.title}
                                </a>
                                <br />
                                {issue.labels.map(label => (
                                    <span key={`${label.id}`}>{label.name}</span>
                                ))}
                            </strong>
                        </div>
                    </li>
                ))}
            </IssuesList>

            <PageActions>
                <button disabled={page === 1 ? true : false} type='button' onClick={() => handlePage('back')}>
                    <IoArrowBack size={14} />
                    Anterior
                </button>
                <span>{`Página ${page}`}</span>
                <button type='button' onClick={() => handlePage('next')}>
                    Próxima
                    <IoArrowForward size={14} />
                </button>
            </PageActions>
        </Container>
    )
};
