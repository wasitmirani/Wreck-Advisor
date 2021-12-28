<?php

namespace App\Http\Livewire;

use Livewire\Component;


class Contact extends Component
{
    public function render()
    {
        return view('livewire.contact');
    }

    public $name,$email,$phone,$message;

    protected $rules = [
        'name' => 'required|min:6',
        'email' => 'required|email',
    ];
    public function updated($propertyName)
    {
        $this->validateOnly($propertyName);
    }

    public function submit()
    {
        $validatedData = $this->validate();

        // Execution doesn't reach here if validation fails.

        Contact::create([
            'name' => $this->name,
            'email' => $this->email,
            'phone' => $this->phone,
            'message' => $this->message,
        ]);
    }
}
