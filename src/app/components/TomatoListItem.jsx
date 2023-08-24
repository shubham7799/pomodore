export default function TomatoListItem() {
    return (
      <div className="bg-[#F5f5f5] flex rounded-2xl p-6 w-[500px]">
        <AddTomato />
        <div>
            <h3>Task Name</h3>
            <p>Category</p>
        </div>
        <div></div>
      </div>
    )
  }