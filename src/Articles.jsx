import React, { useState } from 'react'
import { Button, Input, List, Modal, Segment } from 'semantic-ui-react'
import './App.css';
import { useHistory } from 'react-router-dom'


function Articles() {
    const history = useHistory()
    const [articles, articleAction] = useState([{ header: 'article 1', description: 'description 1' }, { header: 'article 2', description: 'description 2' }, { header: 'article 3', description: 'description 3' }, { header: 'article 4', description: 'description 4' }, { header: 'article 5', description: 'description 5' }, { header: 'article 6', description: 'description 6' }, { header: 'article 7', description: 'description 7' }, { header: 'article 8', description: 'description 8' }])
    const [modalData, setOpen] = useState({ open: false, article: {}, newArticle: {} });

    function deleteArticle(article) {
        const idx = findIdx(article)
        articles.splice(idx, 1)
        articleAction(temp => [...articles])
    }

    function findIdx(article) {
        const idx = articles.findIndex((item) => {
            return item.header === article.header;
        })
        return idx;
    }

    function openModal(article) {
        setOpen({ open: true, article: article })
    }

    function updateArticle(article) {
        if (modalData.newArticle?.header === '') {
            alert('Please provide Header')
            return
        }
        if (modalData.newArticle?.description === '') {
            alert('Please provide Description')
            return
        }
        const idx = findIdx(article);
        articles[idx] = {
            header: modalData.newArticle?.header ?? modalData.article.header,
            description: modalData.newArticle?.description ?? modalData.article?.description
        };
        articleAction(temp => [...articles])
        setOpen({ open: false, article: {} })
    }

    function showDetails(article) {
        history?.push('/article-details', article)
    }

    return (

        <div className="App">
            <Segment>
                {articles.length === 0 ? 'Please reload to load articles' :
                    <List divided relaxed>
                        {articles.map(i => {
                            return (
                                <List.Item key={i.header}>

                                    <List.Icon title='Delete Article' name='trash' size='large' verticalAlign='middle' className='right' onClick={() => { deleteArticle(i) }} />
                                    <List.Icon title='Update Article' name='edit' size='large' verticalAlign='middle' className='right' onClick={() => { openModal(i) }} />
                                    <List.Content onClick={() => { showDetails(i) }}>
                                        <List.Header as='a'>{i.header}</List.Header>
                                        <List.Description as='a'>{i.description}</List.Description>
                                    </List.Content>
                                </List.Item>
                            )
                        })}
                    </List>}
            </Segment>

            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={modalData?.open}
            >
                <Modal.Header>Update Article</Modal.Header>
                <Modal.Content image>
                    <Modal.Description>
                        Header: <Input required type='text' defaultValue={modalData.article?.header} onChange={(e) => { setOpen({ ...modalData, newArticle: { header: e.target.value ?? modalData.article?.header, description: modalData.newArticle?.description } }) }}></Input>
                        <br />
              Description:<Input required type='text' defaultValue={modalData.article?.description} onChange={(e) => { setOpen({ ...modalData, newArticle: { description: e.target.value ?? modalData.article?.description, header: modalData.newArticle?.header } }) }}></Input>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='black' onClick={() => setOpen({ open: false, article: {} })}>
                        Cancel
          </Button>
                    <Button
                        content="Update"
                        labelPosition='right'
                        icon='checkmark'
                        onClick={() => updateArticle(modalData.article,)}
                        positive
                    />
                </Modal.Actions>
            </Modal>


        </div>


    );
}

export default Articles;