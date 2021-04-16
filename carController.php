class carController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        
        
        
		return view('cars.index')->with(['car.index=>cars::whereDispo(1)car->get()']);	  
      
    }
