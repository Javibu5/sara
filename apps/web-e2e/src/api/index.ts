module.exports = {
  newUser: (body, _id: string) => ({
    ...body,
    _id,
  }),

  getAll: (resource: string, body, bearer: string, failOnStatusCode = false) =>
    cy.request({
      method: 'GET',
      url: resource,
      auth: { bearer },
      body,
      failOnStatusCode,
    }),
  post: (resource: string, body, bearer: string, failOnStatusCode = false) =>
    cy.request({
      method: 'POST',
      url: resource,
      auth: { bearer },
      body,
      failOnStatusCode,
    }),
  put: (
    resource: string,
    id: string,
    body,
    bearer: string,
    failOnStatusCode = false
  ) =>
    cy.request({
      method: 'PUT',
      url: `${resource}/${id}`,
      auth: { bearer },
      body,
      failOnStatusCode,
    }),
  patch: (
    resource: string,
    id: string,
    body,
    bearer: string,
    failOnStatusCode = false
  ) =>
    cy.request({
      method: 'PATCH',
      url: `${resource}/${id}`,
      auth: { bearer },
      body,
      failOnStatusCode,
    }),
  get: (
    resource: string,
    id: string,
    bearer: string,
    failOnStatusCode = false
  ) =>
    cy.request({
      method: 'GET',
      url: `${resource}/${id}`,
      auth: { bearer },
      failOnStatusCode,
    }),
  remove: (
    resource: string,
    id: string,
    bearer: string,
    failOnStatusCode = false
  ) =>
    cy.request({
      method: 'DELETE',
      url: `${resource}/${id}`,
      auth: { bearer },
      failOnStatusCode,
    }),
};
