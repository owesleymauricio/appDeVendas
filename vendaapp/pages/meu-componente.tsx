

function Mensagem(props: any) {
  return (
    <div>{props.mensagem}</div>
  )
}

function Meucomponente() {
  return (
    <div>
      <Mensagem mensagem="ola mundo!"/>
    </div>
  )
}

export default Meucomponente;