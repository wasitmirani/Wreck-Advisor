<div>
    {{-- If you look to others for fulfillment, you will never truly be fulfilled. --}}
         <form  wire:submit.prevent="submit" class="row">
              <div class="form-group col-6">

                <input type="text" wire:model="name">
                 @error('name') <span class="error text-danger">{{ $message }}</span> @enderror
              </div>
              <div class="form-group col-6">
                 <input type="text" wire:model="email">
                 @error('email') <span class="error text-danger">{{ $message }}</span> @enderror
              </div>
              <div class="form-group col-12">
                 <input type="tel" wire:model="phone">
                 @error('phone') <span class="error text-danger">{{ $message }}</span> @enderror

              </div>
              <div class="form-group col-12">
                <textarea wire:model="message" id="" placeholder="Message"></textarea>
                 @error('message') <span class="error text-danger">{{ $message }}</span> @enderror
              </div>
              <div class="form-group col-12 ">
               
                 <button type="submit" class="btn btn-business" >SUBMIT NOW</button>
              </div>
     </form>
</div>
