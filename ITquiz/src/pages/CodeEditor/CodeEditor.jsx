import React from 'react'
import Editor from '../../components/Editor/EditorMain';
import Footer from '../../utils/Footer';
import Header from '../../components/Header';

const CodeEditor = () => {
  return (
    <div>
      <Header />
      <Editor />
      <Footer />
    </div>
  )
}

export default CodeEditor