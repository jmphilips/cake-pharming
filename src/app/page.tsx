import KitchenComponent from "@/app/kitchen-component";
export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
            <h1>Welcome to the Cupcake factory</h1>
          <KitchenComponent/>
        </div>
      </main>
  )
}
