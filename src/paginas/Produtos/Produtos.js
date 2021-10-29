import React, { useEffect, useState, useRef } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { lerProdutos, criarProduto } from "config/firebaseService";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);

  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [quantidade, setQuantidade] = useState("")
  const [descricao, setDescricao] = useState("");


  const classes = useStyles();

  function carregarProdutos() {
    lerProdutos().then(produtos => {
     const produtosMapeados = produtos.map(produto => ([
      String(produto.nome),
      "25/01/2970",
      String(produto.quantidade),
      String(produto.valor) || String(produto["preço"])
     ]))

     setProdutos([...produtosMapeados]);
    });

  }

  async function salvarProduto() {
    const produto = {
      nome,
      "preço": preco,
      quantidade,
      descricao,
    };

    const novoProduto = await  criarProduto(produto);
    console.log(novoProduto)
    setProdutos((produtos) => [...produtos, [novoProduto.nome, "", novoProduto.quantidade, novoProduto["preço"]]])

  }

  useEffect(() => {
    carregarProdutos();
  }, [])

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Cadastrar Produto</h4>
              <p className={classes.cardCategoryWhite}>
                Informar dados do Produto
              </p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Produto"
                    id="nomeProduto"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: false,
                      value: nome,
                      onChange: (event) => {
                        setNome(event.target.value);
                      },
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Preço"
                    id="username"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: false,
                      value: preco,
                      onChange: (event) => {
                        setPreco(event.target.value);
                      },
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Quantidade"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      value: quantidade,
                      onChange: (event) => {
                        setQuantidade(event.target.value);
                      },
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Descrição do Produto"
                    id="about-me"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                      value: descricao,
                      onChange: (event) => {
                        setDescricao(event.target.value);
                      },
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button
                onClick={() => salvarProduto()}
                color="primary"
                disabled={false}
              >
                Registrar Produto
              </Button>
              {/* Botão */}
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Estoque</h4>
              <p className={classes.cardCategoryWhite}>Produtos em estoque</p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={["Produto", "Data de Entrada", "Estoque", "Preço"]}
                tableData={produtos}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
