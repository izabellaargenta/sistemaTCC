import React from "react";
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
  const classes = useStyles();

  function carregarProdutos() {
    lerProdutos().then(produtos => {
      console.log('produtos', produtos)
    });
  }

  function salvarProduto() {
    const produto = {
      nome: 'Corrente',
      preço: 5.99,
      quantidade: 10,
      descricao: 'descrição de exemplo',
    };

    criarProduto(produto).then(
      // Sucesso
      novoProduto => {
        console.log('novo produto', novoProduto);
      },
      // Erro
      mensagemDeErro => {
        alert(mensagemDeErro);
      },
    );
  }

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
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Quantidade"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true,
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
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button onClick={carregarProdutos} color="primary" disabled={false}>Registrar Produto</Button>{/* Botão */}
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
              tableData={[
                ["Mudas Alface", "07/10/21", "50 u", "R$15,00"],
                ["Ração Supra Gatos", "07/10/21", "1kg", "R$10,00"],
                ["Corrente", "07/10/21", "10kg", "R$56,142"],
                ["Corda fina", "07/10/21", "40m", "R$38,735"],
                ["Ração Postura Concentrada", "07/10/21", "1pct", "R$20,00"],
                ["Ração Farroupilha Cavalos", "07/10/21", "50 sacos", "R$78,615"],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      </GridContainer>
    </div>
  );
}
