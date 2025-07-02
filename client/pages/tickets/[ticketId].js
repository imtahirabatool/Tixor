import Router from "next/router";
import useRequest from "../../hooks/use-request";

const TicketShow = ({ ticket }) => {
  const { doRequest, errors } = useRequest({
    url: "/api/orders",
    method: "post",
    body: { ticketId: ticket.id },
    onSuccess: (order) =>
      Router.push("/orders/[orderId]", `/orders/${order.id}`),
  });

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm">
        <h2>{ticket.title}</h2>
        <h5 className="text-muted mb-3">Price: ${ticket.price}</h5>
        {errors}
        <button onClick={() => doRequest()} className="btn btn-primary w-100">
          Purchase
        </button>
      </div>
    </div>
  );
};

TicketShow.getInitialProps = async (context, client) => {
  const { ticketId } = context.query;
  const { data } = await client.get(`/api/tickets/${ticketId}`);
  return { ticket: data };
};

export default TicketShow;
