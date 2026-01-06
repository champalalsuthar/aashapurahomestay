export default function SingleRoom() {
  return (
    <div className="p-6 mt-20">
      <h1 className="text-3xl font-bold">Deluxe Room</h1>
      <p>Price: ₹3000/night</p>
      <form method="post" action="/api/booking" className="mt-4">
        <input name="name" placeholder="Name" className="border p-2 w-full mb-2" />
        <input name="email" placeholder="Email" className="border p-2 w-full mb-2" />
        <button className="bg-black text-white px-4 py-2">Book Now</button>
      </form>
    </div>
  )
}