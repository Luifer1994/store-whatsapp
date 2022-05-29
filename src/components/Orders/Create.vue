<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-body">
        <form class="needs-validation" novalidate>
          <div class="form-row">
            <div class="col-md-6 mb-3">
              <label for="validationCustom03">Email</label>
              <input
                type="email"
                v-model="client.email"
                class="form-control"
                :class="{
                  'is-invalid':
                    errors.email || errorsCreated.client['client.email'],
                }"
              />
              <small v-if="errors.email" class="text-danger">{{
                errors.email[0]
              }}</small>
              <small
                v-if="errorsCreated.client['client.email']"
                class="text-danger"
                >{{ errorsCreated.client["client.email"][0] }}</small
              >
            </div>
            <div v-if="finishSearch">
              <div class="col-md-6 mb-3">
                <label for="validationCustom01">Tipo de documento</label>
                <select
                  v-model="client.document_type_id"
                  class="form-control"
                  :class="{
                    'is-invalid':
                      errorsCreated.client['client.document_type_id'],
                  }"
                >
                  <option
                    v-for="documentType in documentTypes"
                    :key="documentType.id"
                    :value="documentType.id"
                  >
                    {{ documentType.name }}
                  </option>
                </select>
                <small
                  v-if="errorsCreated.client['client.document_type_id']"
                  class="text-danger"
                  >{{
                    errorsCreated.client["client.document_type_id"][0]
                  }}</small
                >
              </div>
              <div class="col-md-6 mb-3">
                <label for="validationCustom02">Número de documento</label>
                <input
                  v-model="client.document_number"
                  type="text"
                  class="form-control"
                  :class="{
                    'is-invalid':
                      errorsCreated.client['client.document_number'],
                  }"
                />
                <small
                  v-if="errorsCreated.client['client.document_number']"
                  class="text-danger"
                  >{{
                    errorsCreated.client["client.document_number"][0]
                  }}</small
                >
              </div>

              <div class="col-md-6 mb-3">
                <label for="validationCustom03">Nombre</label>
                <input
                  v-model="client.name"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errorsCreated.client['client.name'] }"
                />
                <small
                  v-if="errorsCreated.client['client.name']"
                  class="text-danger"
                  >{{ errorsCreated.client["client.name"][0] }}</small
                >
              </div>
              <div class="col-md-6 mb-3">
                <label for="validationCustom03">Apellidos</label>
                <input
                  v-model="client.last_name"
                  type="text"
                  class="form-control"
                  :class="{
                    'is-invalid': errorsCreated.client['client.last_name'],
                  }"
                />
                <small
                  v-if="errorsCreated.client['client.last_name']"
                  class="text-danger"
                  >{{ errorsCreated.client["client.last_name"][0] }}</small
                >
              </div>

              <div class="col-md-6 mb-3">
                <label for="validationCustom03">Télefono</label>
                <input
                  v-model="client.phone"
                  type="number"
                  class="form-control"
                  :class="{
                    'is-invalid': errorsCreated.client['client.phone'],
                  }"
                />
                <small
                  v-if="errorsCreated.client['client.phone']"
                  class="text-danger"
                  >{{ errorsCreated.client["client.phone"][0] }}</small
                >
              </div>
            </div>
          </div>
          <div class="float-right text-right">
            <h5>Total a pagar:</h5>
            <h3 class="price">$ {{ total }}</h3>
          </div>
          <div v-if="finishSearch">
            <button v-if="loading" class="btn btn-warning text-white" disabled>
              Crgando...
            </button>

            <button
              v-else
              @click="createOrder()"
              class="btn btn-warning text-white"
            >
              Crear pedido
            </button>
          </div>
          <button
            v-else
            @click="searchCliet()"
            class="btn btn-warning text-white"
          >
            Validar email
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "create",
  mounted() {
    this.calculateTotal();
    this.getDocumentTypes();
  },
  data() {
    return {
      urlApi: process.env.VUE_APP_URL_API,
      total: null,
      finishSearch: false,
      documentTypes: [],
      loading: false,
      client: {
        id: null,
        document_type_id: null,
        document_number: null,
        name: null,
        last_name: null,
        email: null,
        phone: null,
      },
      errors: {},
      errorsCreated: {
        client: {
          "client.document_number": 0,
          "client.document_type_id": 0,
          "client.name": 0,
          "client.last_name": 0,
          "client.email": 0,
          "client.phone": 0,
        },
      },
    };
  },
  methods: {
    //document-type-list', 'index'
    async getDocumentTypes() {
      const res = await axios.get(this.urlApi + "document-type-list");
      if (res.data.data) {
        this.documentTypes = res.data.data.data;
      }
    },
    async searchCliet() {
      try {
        const res = await axios.get(
          this.urlApi + "client-by-email?email=" + this.client.email
        );
        if (res.data) {
          this.client = res.data.data;
          this.errors.email = null;
        }
        this.finishSearch = true;
      } catch (error) {
        this.errors = error.response.data;
        if (!this.errors.email) {
          this.finishSearch = true;
        }
      }
    },
    async createOrder() {
      try {
        this.loading = true;
        let payLoad = new Object();
        (payLoad.products = []),
          this.$store.state.cart.forEach((el) => {
            payLoad.products.push({ id: el.id, quantity: el.quantity });
          });
        payLoad.client = this.client;
        const res = await axios.post(this.urlApi + "order-create", payLoad);

        if (res.data.res) {
          this.$store.state.cart.forEach((el) => {
            this.$store.commit("remove", el);
          });
          this.emitter.emit("add");
          this.total = 0;
          this.loading = false;
          window.location.href = res.data.data.url_payment;
        }
      } catch (error) {
        this.loading = false;
        this.errorsCreated.client = error.response.data;
      }
    },
    calculateTotal() {
      this.$store.state.cart.forEach((element) => {
        this.total += element.price * element.quantity;
      });
    },
  },
};
</script>